"use client";

import { useEffect, useRef } from "react";

const VIDEO_BASE = "/sites/active-signposts-606787-framer-app-4695cba6/root-8a5edab2/videos";

interface Testimonio {
  name: string;
  company: string;
  video: string;
}

const TESTIMONIOS: Testimonio[] = [
  { name: "Ana Maria Ruge", company: "Efecto", video: `${VIDEO_BASE}/OYBuCfn6ofotK77XP0c9kHaxQ.mp4` },
  { name: "Cindy Colorado", company: "Dobladora y cortadora", video: `${VIDEO_BASE}/utAjfrXQp7bOfoCKRgWbatpS4.webm` },
  { name: "Oscar Gonzalez", company: "Inseprosas", video: `${VIDEO_BASE}/iieH4OJxLmTAKtzNQx6CF6Kmm9Y.webm` },
  { name: "Ximena Camelo", company: "Mentor Go", video: `${VIDEO_BASE}/R1js3NQs0DnN6cee56qVe7yOaG4.mp4` },
  { name: "Carlos Chaves", company: "Datagrafía", video: `${VIDEO_BASE}/xsIoCM0PqLwi7eS7RHI0vnloeg.mp4` },
];

export default function LograTestimonios() {
  const rowRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            row.style.transform = "scale(1)";
            row.style.opacity = "1";
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  const handleEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    // Play with sound; if the browser blocks unmuted playback
    // (no prior user gesture), fall back to muted playback.
    video.muted = false;
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {
        video.muted = true;
        video.play().catch(() => {
          /* autoplay fully rejected — ignore */
        });
      });
    }
  };

  const handleLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.pause();
    video.muted = true;
  };

  // Click is a trusted gesture: guarantees unmuted playback everywhere.
  const handleClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused || video.muted) {
      video.muted = false;
      video.play().catch(() => {
        /* ignore */
      });
    } else {
      video.muted = true;
    }
  };

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 20px",
        overflow: "hidden",
      }}
    >
      <div
        ref={rowRef}
        className="logra-testimonios-row"
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          transform: "scale(0.8)",
          opacity: 0.8,
          transition: "transform 0.7s cubic-bezier(0.25,0.1,0.25,1), opacity 0.7s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      >
        {TESTIMONIOS.map((t, i) => (
          <div
            key={t.name}
            className="logra-testimonio-card"
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            onClick={() => handleClick(i)}
            style={{
              width: 224,
              height: 600,
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={t.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="logra-testimonio-video"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-logra-display), Figtree, sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-logra-body), Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.8)",
                  marginTop: 4,
                }}
              >
                {t.company}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .logra-testimonio-card:hover .logra-testimonio-video {
          transform: scale(1.05);
        }
        @media (max-width: 767px) {
          .logra-testimonios-row {
            justify-content: flex-start !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .logra-testimonio-card {
            width: 224px !important;
            height: 480px !important;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}
