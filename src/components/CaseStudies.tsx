"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    slug: "anthropic",
    title: "Anthropic",
    subtitle: "Business Model Canvas & AI Strategy",
    image: "/images/anthropic-cover.png",
  },
  {
    slug: "boat",
    title: "boAt",
    subtitle: "Marketing Strategy & Consumer Electronics",
    image: "/images/boat-cover.png",
  },
  {
    slug: "google",
    title: "Google",
    subtitle: "Gen AI & Strategic Analysis",
    image: "/images/google-cover.png",
  },
  {
    slug: "roblox",
    title: "Roblox",
    subtitle: "Gaming Platform & Metaverse Strategy",
    image: "/images/roblox-cover.png",
  },
  {
    slug: "snapchat",
    title: "Snapchat",
    subtitle: "Social Media & Technology Analysis",
    image: "/images/snapchat-cover.webp",
  },
  {
    slug: "walmart-vs-bestbuy",
    title: "Walmart vs Best Buy",
    subtitle: "4Ps of Marketing & Value Proposition",
    image: "/images/walmart-cover.png",
  },
];

function CaseStudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <Link
      href={`/case-study/${study.slug}`}
      className="card-hover group block rounded-2xl overflow-hidden bg-surface"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="card-image object-cover object-center"
          sizes="(max-width: 768px) 75vw, 720px"
        />
        <div className="card-overlay absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.01em]">
            {study.title}
          </h3>
          <p className="text-white/55 text-[0.8125rem] mt-1">
            {study.subtitle}
          </p>
        </div>
      </div>
      <div className="px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        <span className="text-accent text-sm font-medium">Read analysis</span>
        <svg
          className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length < 2) return 0;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const updatePadRight = () => {
      const firstCard = track.querySelector<HTMLElement>("[data-card]");
      if (!firstCard) return;
      const padLeft = parseFloat(getComputedStyle(track).paddingLeft);
      const cardWidth = firstCard.offsetWidth;
      const padRight = Math.max(0, container.clientWidth - padLeft - cardWidth) + 4;
      track.style.paddingRight = `${padRight}px`;
    };

    const handleScroll = () => {
      const step = getCardStep();
      if (step === 0) return;
      const idx = Math.round(container.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(caseStudies.length - 1, idx)));
    };

    updatePadRight();
    handleScroll();
    window.addEventListener("resize", updatePadRight);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePadRight);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [getCardStep]);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(caseStudies.length - 1, index));
    const step = getCardStep();
    if (step === 0) return;
    container.scrollTo({ left: clamped * step, behavior: "smooth" });
  };

  const contentPadLeft =
    "max(calc((100vw - 960px) / 2 + 40px), 40px)";

  return (
    <section id="case-studies" className="relative bg-black py-20 md:py-28 lg:py-36">
      {/* Header */}
      <div
        data-animate="fade-up"
        className="mb-10 md:mb-14"
        style={{
          paddingLeft: contentPadLeft,
          paddingRight: contentPadLeft,
        }}
      >
        <p className="text-muted text-xs font-medium uppercase tracking-[0.2em] mb-4 md:mb-5">
          Case Studies
        </p>
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-semibold tracking-[-0.03em] text-foreground leading-[1.08]">
          Strategic thinking,
          <br />
          <span className="gradient-text">applied to real companies.</span>
        </h2>
        <p className="mt-4 md:mt-5 text-muted text-sm sm:text-[0.9375rem] max-w-lg leading-relaxed">
          In-depth analyses covering business models, competitive landscapes,
          and multi-horizon strategic recommendations.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="carousel-scrollbar-hide overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: contentPadLeft,
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-7"
          style={{ paddingLeft: contentPadLeft }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              data-card
              className="w-[75vw] sm:w-[65vw] md:w-[min(720px,calc(100vw-200px))] flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation: arrows + dots */}
      <div
        className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5"
        style={{ paddingLeft: contentPadLeft }}
      >
        <button
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          aria-label="Previous case study"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-[6px]">
          {caseStudies.map((study, i) => (
            <button
              key={study.slug}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to ${study.title}`}
              className="h-[7px] rounded-full transition-all duration-300 ease-out"
              style={{
                width: activeIndex === i ? 24 : 7,
                backgroundColor:
                  activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === caseStudies.length - 1}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          aria-label="Next case study"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
