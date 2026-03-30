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

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-black">
      <div className="max-w-[960px] mx-auto px-10 sm:px-14 md:px-16 py-28 md:py-36 lg:py-44">
        {/* Section header */}
        <div data-animate="fade-up" className="text-center mb-14 md:mb-20">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.2em] mb-5">
            Case Studies
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-foreground leading-[1.08]">
            Strategic thinking,
            <br />
            <span className="gradient-text">applied to real companies.</span>
          </h2>
          <p className="mt-5 text-muted text-sm sm:text-[0.9375rem] max-w-lg mx-auto leading-relaxed">
            In-depth analyses covering business models, competitive landscapes,
            and multi-horizon strategic recommendations.
          </p>
        </div>

        {/* Card grid */}
        <div data-animate="stagger" className="grid md:grid-cols-2 gap-4 md:gap-5">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="card-hover group block rounded-2xl overflow-hidden bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="card-image object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
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

              <div className="px-6 sm:px-7 py-4 flex items-center justify-between">
                <span className="text-accent text-sm font-medium">
                  Read analysis
                </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
