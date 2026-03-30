"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.45"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.35"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.1"
      );

    const onScroll = () => {
      const y = window.scrollY;
      if (nameRef.current) {
        nameRef.current.style.transform = `translateY(${y * 0.25}px)`;
        nameRef.current.style.opacity = `${Math.max(0, 1 - y / 600)}`;
      }
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${y * 0.08}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-8 sm:px-12 max-w-3xl mx-auto">
        <div
          ref={photoRef}
          className="mx-auto mb-8 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden profile-glow border-2 border-white/[0.08]"
          style={{ opacity: 0 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Lakshya Singh"
            width={260}
            height={260}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        <h1
          ref={nameRef}
          className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-semibold tracking-[-0.04em] text-foreground leading-[0.95]"
          style={{ opacity: 0 }}
        >
          Lakshya
          <br />
          Singh
        </h1>

        <p
          ref={titleRef}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-medium text-muted tracking-[-0.01em]"
          style={{ opacity: 0 }}
        >
          Product Manager
        </p>

        <p
          ref={subtitleRef}
          className="mt-4 text-sm sm:text-[0.9375rem] text-muted/60 max-w-sm mx-auto leading-relaxed"
          style={{ opacity: 0 }}
        >
          Building AI-native products at Follio. Previously shipping at
          Revvity and INKHUB Tattoos.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-[0.625rem] text-muted/40 uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-muted/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
