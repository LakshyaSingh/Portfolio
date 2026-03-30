"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll("[data-animate]");

    elements.forEach((el) => {
      const type = el.getAttribute("data-animate");
      const delay = parseFloat(el.getAttribute("data-delay") || "0");

      switch (type) {
        case "fade-up":
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "fade-in":
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              delay,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "scale-in":
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.92 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              delay,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "stagger":
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "stat":
          gsap.fromTo(
            el,
            { opacity: 0, y: 20, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
          break;
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useScrollAnimations();
  return <div ref={ref}>{children}</div>;
}
