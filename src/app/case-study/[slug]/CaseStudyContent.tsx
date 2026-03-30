"use client";

import { AnimatedSection } from "@/components/ScrollAnimations";

interface StudyData {
  title: string;
  accent: string;
  pdfFile: string;
  overview: string;
  problemStatement: string;
  strategicPosition: string;
  recommendations: string[];
  frameworks: string[];
}

export function CaseStudyContent({ study }: { study: StudyData }) {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24">
        <div className="max-w-[680px] mx-auto px-6">
          {/* Overview */}
          <div data-animate="fade-up">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-4"
              style={{ color: study.accent }}
            >
              Overview
            </p>
            <p className="text-base sm:text-[1.0625rem] text-muted leading-[1.65]">
              {study.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div data-animate="fade-up" className="mt-14">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-4"
              style={{ color: study.accent }}
            >
              Problem Statement
            </p>
            <h2 className="text-[1.375rem] sm:text-[1.625rem] md:text-[1.875rem] font-semibold text-foreground leading-snug tracking-[-0.02em]">
              {study.problemStatement}
            </h2>
          </div>

          {/* Strategic Position */}
          <div data-animate="fade-up" className="mt-14">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-4"
              style={{ color: study.accent }}
            >
              Strategic Position
            </p>
            <p className="text-base text-muted leading-[1.65]">
              {study.strategicPosition}
            </p>
          </div>

          {/* Recommendations */}
          <div data-animate="fade-up" className="mt-14">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-6"
              style={{ color: study.accent }}
            >
              Key Recommendations
            </p>
            <div className="space-y-3">
              {study.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-surface border border-white/[0.04]"
                >
                  <span
                    className="text-sm font-semibold mt-0.5 flex-shrink-0 font-mono"
                    style={{ color: study.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div data-animate="fade-up" className="mt-14">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-5"
              style={{ color: study.accent }}
            >
              Frameworks Applied
            </p>
            <div className="flex flex-wrap gap-2">
              {study.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="tag-pill text-xs text-muted px-4 py-2 rounded-full"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Download PDF */}
          <div
            data-animate="fade-up"
            className="mt-16 pt-10 border-t border-white/[0.04]"
          >
            <a
              href={study.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/[0.12] text-foreground text-sm font-medium hover:bg-white/[0.04] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Full Case Study
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
