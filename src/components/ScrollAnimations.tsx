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

      // Make element visible once GSAP takes over (CSS hides via visibility:hidden)
      const show = (target: Element | Element[] | HTMLCollection) => {
        gsap.set(target, { visibility: "visible" });
      };

      switch (type) {
        case "fade-up":
          show(el);
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
                end: "top 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "fade-in":
          show(el);
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
                end: "top 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "scale-in":
          show(el);
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
                end: "top 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "stagger":
          show(el.children);
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
                end: "top 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "stat":
          show(el);
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
                end: "top 15%",
                toggleActions: "play none none reverse",
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
