export function Contact() {
  return (
    <section id="contact" className="relative bg-black">
      <div className="max-w-[880px] mx-auto px-10 sm:px-14 md:px-16 py-28 md:py-36 lg:py-44 text-center">
        <div data-animate="fade-up">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.2em] mb-5">
            Get in Touch
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-foreground leading-[1.08]">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
          <p className="mt-5 text-muted text-sm sm:text-[0.9375rem] max-w-md mx-auto leading-relaxed">
            Open to discussing product strategy, new opportunities,
            or interesting collaborations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:lakshya.s2506@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/lakshyasingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/[0.12] text-foreground text-sm font-medium hover:bg-white/[0.04] transition-colors whitespace-nowrap"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[880px] mx-auto px-10 sm:px-14 md:px-16 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.6875rem] text-muted/40">
            &copy; {new Date().getFullYear()} Lakshya Singh
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:lakshya.s2506@gmail.com"
              className="text-[0.6875rem] text-muted/40 hover:text-muted transition-colors"
            >
              lakshya.s2506@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/lakshyasingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6875rem] text-muted/40 hover:text-muted transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
