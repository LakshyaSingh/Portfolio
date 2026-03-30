export function Background() {
  return (
    <section id="background" className="relative bg-surface-light">
      <div className="max-w-[880px] mx-auto px-10 sm:px-14 md:px-16 py-28 md:py-36 lg:py-44">
        {/* Section header */}
        <div data-animate="fade-up" className="text-center mb-14 md:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] mb-5 text-muted-dark">
            Background
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.08] text-text-dark">
            Education, leadership,
            <br />
            <span className="gradient-text-dark">and the work behind the work.</span>
          </h2>
        </div>

        {/* Two-column grid: Education + Leadership */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          {/* Education */}
          <div data-animate="fade-up">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 pb-3 border-b border-black/[0.12] text-muted">
              Education
            </h3>
            <div className="space-y-10">
              <div>
                <p className="font-semibold text-base text-text-dark">
                  Northeastern University
                </p>
                <p className="text-sm mt-1.5 leading-relaxed text-muted-dark">
                  Master of Science in Project Management
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-mono text-muted">
                    Jun 2025
                  </span>
                  <span className="text-black/20">·</span>
                  <span className="text-xs font-medium text-muted">
                    GPA 3.8 / 4.0
                  </span>
                </div>
              </div>
              <div>
                <p className="font-semibold text-base text-text-dark">
                  International Institute of Information Technology
                </p>
                <p className="text-sm mt-1.5 leading-relaxed text-muted-dark">
                  Bachelor of Technology, Electronics &amp; Communication Engineering
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-mono text-muted">
                    Aug 2023
                  </span>
                  <span className="text-black/20">·</span>
                  <span className="text-xs font-medium text-muted">
                    GPA 3.3 / 4.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div data-animate="fade-up" data-delay="0.1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 pb-3 border-b border-black/[0.12] text-muted">
              Leadership
            </h3>
            <div className="space-y-7">
              <div className="pl-5 border-l-2 border-black/[0.18]">
                <p className="font-medium text-sm text-text-dark">
                  Airbnb Case Study, Project Lead
                </p>
                <p className="text-[0.8125rem] mt-1.5 leading-[1.65] text-muted-dark">
                  Led 4-person team to design tiered loyalty program, projecting 15% increase in bookings and $5,184 incremental revenue from high-value segment.
                </p>
              </div>
              <div className="pl-5 border-l-2 border-black/[0.18]">
                <p className="font-medium text-sm text-text-dark">
                  boAt Marketing Strategy, Research Lead
                </p>
                <p className="text-[0.8125rem] mt-1.5 leading-[1.65] text-muted-dark">
                  Won The CASE Journal 2023 Best Case Award (First Runner Up) with 3 academic citations. Analyzed boAt&apos;s 208% profit increase to $6.8M.
                </p>
              </div>
              <div className="pl-5 border-l-2 border-black/[0.18]">
                <p className="font-medium text-sm text-text-dark">
                  E-Cell, IIIT: Content Team Manager
                </p>
                <p className="text-[0.8125rem] mt-1.5 leading-[1.65] text-muted-dark">
                  Grew following 50% to 600 followers, secured $20K in sponsorships (33% above target) for E-Summit 2022.
                </p>
              </div>
              <div className="pl-5 border-l-2 border-black/[0.18]">
                <p className="font-medium text-sm text-text-dark">
                  Hult Prize Foundation: Judges &amp; Participants Manager
                </p>
                <p className="text-[0.8125rem] mt-1.5 leading-[1.65] text-muted-dark">
                  Exceeded participation goals by 30%, recruited 3 senior executives as judges enhancing event credibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Tools */}
        <div
          data-animate="fade-up"
          className="mt-20 pt-12 border-t border-black/[0.12] text-center"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 text-muted">
            Skills &amp; Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Go-to-Market Strategy",
              "Feature Prioritization",
              "Cross-functional Collaboration",
              "Market Research",
              "User Stories",
              "PDLC",
              "Jira",
              "Confluence",
              "Trello",
              "Power BI",
              "Google Workspace",
              "Claude Code",
            ].map((skill) => (
              <span
                key={skill}
                className="tag-pill-light text-xs px-4 py-2 rounded-full text-muted-dark"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
