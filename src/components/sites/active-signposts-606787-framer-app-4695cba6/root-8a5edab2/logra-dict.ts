/* Translation dictionaries: Spanish source string (whitespace-collapsed,
 * trimmed) → translated string. Generated from the site's extracted text.
 * Split by page group to keep files manageable. */

import { DICT_FR_CORE, DICT_EN_CORE } from "./logra-dict-core";
import { DICT_FR_PAGES, DICT_EN_PAGES } from "./logra-dict-pages";
import { DICT_FR_LEGAL, DICT_EN_LEGAL } from "./logra-dict-legal";

export type LograLang = "es" | "fr" | "en";

export const DICT: Record<"fr" | "en", Record<string, string>> = {
  fr: { ...DICT_FR_CORE, ...DICT_FR_PAGES, ...DICT_FR_LEGAL },
  en: { ...DICT_EN_CORE, ...DICT_EN_PAGES, ...DICT_EN_LEGAL },
};
