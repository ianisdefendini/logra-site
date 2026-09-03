"use client";

/* Client-side translation layer (Realygn-style): single URL, a flag dropdown
 * switches ES (source) / FR / EN. Text nodes under the wrapper are swapped
 * via dictionaries; the choice persists in localStorage. */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DICT, type LograLang } from "./logra-dict";

const STORAGE_KEY = "logra-lang";

const LangContext = createContext<{
  lang: LograLang;
  setLang: (l: LograLang) => void;
}>({ lang: "es", setLang: () => {} });

export function useLograLang() {
  return useContext(LangContext);
}

/** Normalized dictionary key: trimmed, inner whitespace collapsed. */
function norm(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

const ORIGINAL = new WeakMap<Text, string>();

function translateTextNode(node: Text, lang: LograLang) {
  const saved = ORIGINAL.get(node);
  const source = saved !== undefined ? saved : node.data;
  if (lang === "es") {
    if (saved !== undefined) node.data = saved;
    return;
  }
  const key = norm(source);
  if (!key) return;
  const target = DICT[lang][key];
  if (target !== undefined) {
    if (saved === undefined) ORIGINAL.set(node, node.data);
    // keep leading/trailing whitespace of the original
    const m = source.match(/^(\s*)[\s\S]*?(\s*)$/);
    node.data = (m ? m[1] : "") + target + (m ? m[2] : "");
  } else if (saved !== undefined) {
    node.data = saved; // no translation — restore source
  }
}

function walk(root: Node, lang: LograLang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      const p = n.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT")
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((n) => translateTextNode(n, lang));
}

export function LograI18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LograLang>("es");
  const rootRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<LograLang>("es");
  langRef.current = lang;

  const apply = useCallback((l: LograLang) => {
    const root = rootRef.current;
    if (!root) return;
    walk(root, l);
    document.documentElement.lang = l;
  }, []);

  const setLang = useCallback(
    (l: LograLang) => {
      setLangState(l);
      try {
        localStorage.setItem(STORAGE_KEY, l);
      } catch {
        /* private mode */
      }
      apply(l);
    },
    [apply],
  );

  // restore persisted choice
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (saved === "fr" || saved === "en") setLang(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // re-translate nodes that mount later (tab switches, sticky swaps…)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const mo = new MutationObserver((mutations) => {
      if (langRef.current === "es") return;
      mo.disconnect(); // avoid feedback loop while we rewrite text
      mutations.forEach((m) => {
        if (m.type === "characterData" && m.target.nodeType === 3) {
          const t = m.target as Text;
          ORIGINAL.delete(t); // React rewrote it — new source text
          translateTextNode(t, langRef.current);
        }
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 3) translateTextNode(n as Text, langRef.current);
          else if (n.nodeType === 1) walk(n, langRef.current);
        });
      });
      mo.observe(root, obsOpts);
    });
    const obsOpts = {
      subtree: true,
      childList: true,
      characterData: true,
    } as const;
    mo.observe(root, obsOpts);
    return () => mo.disconnect();
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div ref={rootRef} style={{ display: "contents" }}>
        {children}
      </div>
    </LangContext.Provider>
  );
}
