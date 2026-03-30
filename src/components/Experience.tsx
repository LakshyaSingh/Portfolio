const roles = [
  {
    company: "Follio",
    description:
      "Pre-Seed AI-native B2C SaaS platform serving professionals with LLM-powered portfolios",
    role: "Product Manager",
    period: "Sep 2025 — Present",
    location: "US-Remote",
    stats: [
      { value: "35%", label: "Increase in portfolio relevance" },
      { value: "30%", label: "Improved user satisfaction" },
      { value: "50%", label: "Faster iteration cycles" },
    ],
    highlights: [
      "Launched AI-native portfolio product as founding PM, architecting LLM-driven layout synthesis that adapted content based on viewer context and creator role.",
      "Designed AI evals that tested layout accuracy and content prioritization using structured test cases and prompt iteration.",
      "Implemented vibe coding workflows with rapid prompt-to-production development enabling weekly feature releases.",
    ],
  },
  {
    company: "Revvity",
    description:
      "$3B+ life sciences B2B SaaS company serving pharma and biotech across 190+ countries",
    role: "Product Manager Intern",
    period: "Jul 2024 — Jan 2025",
    location: "US-Remote",
    stats: [
      { value: "20%", label: "Reduction in monthly data errors" },
      { value: "15%", label: "Fewer duplicate records" },
      { value: "4 days", label: "Execution time, down 20%" },
    ],
    highlights: [
      "Implemented Master Data Management system serving multiple enterprise life sciences B2B SaaS products, improving CRM reliability.",
      "Built data quality framework for contact and vendor records, increasing data completeness by 20% to 13,800 records.",
      "Shipped Power BI analytics dashboard surfacing real-time workflow metrics, accelerating operational decision-making.",
    ],
  },
  {
    company: "INKHUB Tattoos",
    description: "Pre-Seed D2C e-commerce startup",
    role: "Product Manager",
    period: "Aug 2021 — Aug 2023",
    location: "India",
    stats: [
      { value: "5,000+", label: "Monthly active users" },
      { value: "$70K+", label: "Annual revenue added" },
      { value: "40%", label: "Increase in conversion" },
    ],
    highlights: [
      "Scaled INKHUB Tattoos as founding PM, executing data-driven inbound GTM strategy over 2 years.",
      "Designed segmentation strategy and led Instagram campaigns aligned with Indian festivals and Anime subcultures.",
      "Shipped MVP custom tattoo creation feature in 1 month, collaborating with 3-person engineering team on 0-to-1 development.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface-light">
      <div className="max-w-[880px] mx-auto px-10 sm:px-14 md:px-16 py-28 md:py-36 lg:py-44">
        {/* Section header */}
        <div data-animate="fade-up" className="text-center mb-16 md:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] mb-5 text-muted-dark">
            Experience
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.08] text-text-dark">
            Products shipped.
            <br />
            <span className="gradient-text-dark">Impact delivered.</span>
          </h2>
        </div>

        {/* Roles */}
        <div>
          {roles.map((role, index) => (
            <div
              key={role.company}
              data-animate="fade-up"
              className={`py-12 md:py-14 ${
                index < roles.length - 1
                  ? "border-b border-black/[0.12]"
                  : ""
              }`}
            >
              {/* Company + Role header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.375rem] md:text-[1.625rem] font-semibold tracking-[-0.02em] text-text-dark">
                    {role.company}
                  </h3>
                  <p className="text-sm mt-1.5 leading-relaxed max-w-lg text-muted-dark">
                    {role.description}
                  </p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="text-sm font-medium text-text-dark">
                    {role.role}
                  </p>
                  <p className="text-xs font-mono mt-1 text-muted">
                    {role.period}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
                {role.stats.map((stat) => (
                  <div key={stat.label} data-animate="stat" className="text-center md:text-left">
                    <p className="stat-value text-[1.5rem] md:text-[2rem] font-semibold leading-none text-text-dark">
                      {stat.value}
                    </p>
                    <p className="text-[0.6875rem] md:text-xs mt-2 leading-snug text-muted-dark">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-8 space-y-3">
                {role.highlights.map((h, i) => (
                  <p
                    key={i}
                    className="text-sm leading-[1.7] pl-5 border-l-2 border-black/[0.15] text-muted-dark"
                  >
                    {h}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
