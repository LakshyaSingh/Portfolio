import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "./CaseStudyContent";

const studies: Record<
  string,
  {
    title: string;
    subtitle: string;
    accent: string;
    image: string;
    pdfFile: string;
    overview: string;
    problemStatement: string;
    strategicPosition: string;
    recommendations: string[];
    frameworks: string[];
  }
> = {
  anthropic: {
    title: "Anthropic",
    subtitle: "Business Model Canvas & AI Strategy",
    accent: "#d4a574",
    image: "/images/anthropic-cover.png",
    pdfFile: "/case-studies/Anthropic.pdf",
    overview:
      "A strategic analysis of Anthropic examining its competitive positioning in the Generative AI landscape. Founded by Dario and Daniela Amodei in 2021, Anthropic introduced Constitutional AI — a method to train models with embedded ethical principles — and launched Claude as its flagship AI assistant. This study covers the company's timeline from 2019 to 2023, its Jobs To Be Done, and an external threat assessment.",
    problemStatement:
      "How can Anthropic maintain its competitive edge in the rapidly evolving AI landscape while staying true to its core mission of AI safety and responsible development?",
    strategicPosition:
      "Anthropic's Constitutional AI — inspired by the UN Declaration of Human Rights — provides a unique ethical framework that positions Claude as particularly suitable for educational and enterprise use cases where safety and reliability are paramount. The company competes against well-funded incumbents like OpenAI and Google, with differentiation rooted in trust.",
    recommendations: [
      "Launch a Claude mobile application and connect to the web for real-time responses, integrating with e-commerce and transport apps for price comparison and cost forecasting.",
      "Monetize through API and SDK licenses while expanding Claude to multimodal capabilities — image and voice — with integrations into developer tools like Stack Overflow, GitHub, Notion, and Jira.",
      "Collaborate with educational institutions (MIT, Harvard, Stanford, Berkeley) to leverage Constitutional AI's ethical guardrails, removing usage limits and positioning for enterprise adoption.",
    ],
    frameworks: [
      "Jobs To Be Done",
      "STEEP Analysis",
      "Business Model Canvas",
      "Strategic Horizons",
      "Competitive Scenario Analysis",
    ],
  },
  boat: {
    title: "boAt",
    subtitle: "Marketing Strategy & Consumer Electronics",
    accent: "#e74c3c",
    image: "/images/boat-cover.png",
    pdfFile: "/case-studies/boAt.pdf",
    overview:
      "An analysis of boAt's rise from a $36K startup in 2016 to India's #1 earwear brand by Q3 2020. Co-founded by Aman Gupta and Sameer Mehta, boAt achieved $3.7M in first-year sales and grew to $84.4M by FY2020. The study covers industry dynamics, competitive positioning against Apple, Sony, JBL, and Xiaomi, IPL marketing strategy, and the COVID-19 tailwind that accelerated India's earwear market from 1.6M to 17.3M units.",
    problemStatement:
      "How did boAt disrupt the Indian consumer electronics market dominated by global giants, and what marketing strategies enabled its rapid ascent to become the #1 TWS earphone brand in India?",
    strategicPosition:
      "boAt positioned itself as an affordable, lifestyle-oriented audio brand targeting India's youth. By allocating 90% of its marketing budget to digital channels, leveraging cricket and Bollywood ambassadors (Hardik Pandya, KL Rahul, Jacqueline Fernandez), and building a community of 800,000 'boAtheads,' the company forced competitors like JBL and Skullcandy to reduce prices.",
    recommendations: [
      "Expand product portfolio into adjacent lifestyle categories to leverage brand loyalty.",
      "Strengthen international market presence beyond India to reduce single-market dependency.",
      "Invest in premium product lines to move upmarket and improve margins.",
      "Build direct-to-consumer channels for better margin capture and customer data ownership.",
    ],
    frameworks: [
      "4Ps Marketing Mix",
      "Competitive Analysis",
      "Financial Analysis",
      "IPL Marketing Strategy",
      "COVID-19 Impact Assessment",
    ],
  },
  google: {
    title: "Google",
    subtitle: "Gen AI & Strategic Analysis",
    accent: "#4285f4",
    image: "/images/google-cover.png",
    pdfFile: "/case-studies/Google.pdf",
    overview:
      "A strategic report examining whether Google can avoid the Innovator's Dilemma using Generative AI. With $211.9B+ in revenue and a $2.733T market cap, Google faces disruption from insurgents like OpenAI ($1.6B revenue) while competing with incumbents Microsoft ($211.9B), Amazon ($554B), and Apple ($383B). The study applies BCG's Strategy Palette to recommend a shift from Adaptive to Shaping strategy.",
    problemStatement:
      "Can Google avoid the Innovator's Dilemma and use Generative AI to organize the world's information? What transformative strategy can shape the future while defending its advertising revenue base?",
    strategicPosition:
      "Google is embracing a Shaping strategy that fosters AI across industries, leveraging its massive data and infrastructure advantages. The company launched Bard and Gemini to compete with ChatGPT, but must transition from merely reacting to competitors to actively shaping the Gen AI landscape.",
    recommendations: [
      "Horizon 1 (1–2 years): Cultivate trust in AI products, boost adoption with freemium Bard/Duet AI offerings.",
      "Horizon 2 (2–4 years): Expand AI to healthcare, robotics, and smart cities; foster open-source ecosystem to create platform lock-in.",
      "Horizon 3 (4–7 years): Build AI for customer support with verbal cues and video understanding; invest in quantum and neuromorphic computing.",
    ],
    frameworks: [
      "STEEP Analysis",
      "Competitive Scenario Analysis",
      "BCG Strategy Palette",
      "Three-Horizon Framework",
      "Drivers & Threats Mapping",
    ],
  },
  roblox: {
    title: "Roblox",
    subtitle: "Gaming Platform & Metaverse Strategy",
    accent: "#a0a0a0",
    image: "/images/roblox-cover.png",
    pdfFile: "/case-studies/Roblox.pdf",
    overview:
      "An analysis of Roblox's strategic evolution from an online game platform to a metaverse contender. Founded in 2004 by David Baszucki and Erik Cassel, Roblox reached 164M+ MAU by August 2020 with its free-to-play model and Robux microtransaction economy. The study examines competition from Minecraft, Fortnite, Decentraland, and Meta's Horizon Worlds.",
    problemStatement:
      "How should Roblox evolve beyond its current adaptive gaming strategy to lead the metaverse, and what bold vision will ensure long-term success as the market matures?",
    strategicPosition:
      "Originally employing an Adaptive strategy, Roblox must evolve into a Visionary approach. The company's user-generated content ecosystem and massive user base position it to set open standards for virtual world interoperability — but it must act before competitors claim the metaverse narrative.",
    recommendations: [
      "Horizon 1 (0–1 year): Expand mobile presence with mobile-specific features, collaborate with established brands for cross-platform reach.",
      "Horizon 2 (1–3 years): Invest in AR/blockchain integration, expand audience demographics beyond younger users, diversify monetization beyond Robux.",
      "Horizon 3 (3+ years): Shape the metaverse with open standards, pioneer virtual events and conferences, anticipate regulatory challenges proactively.",
    ],
    frameworks: [
      "STEEP Analysis",
      "Competitive Scenario Analysis",
      "BCG Strategy Palette",
      "Three-Horizon Framework",
    ],
  },
  snapchat: {
    title: "Snapchat",
    subtitle: "Social Media & Technology Analysis",
    accent: "#FFFC00",
    image: "/images/snapchat-cover.webp",
    pdfFile: "/case-studies/Snapchat.pdf",
    overview:
      "A strategic evaluation of Snapchat's positioning in the evolving social media landscape. Known for ephemeral messaging, Stories, Discover, and AR Lens Studio, Snapchat faces fierce competition from Facebook and Instagram replicating its features, while TikTok reshapes content consumption. The study maps incumbents, insurgents, and adjacents across the social media ecosystem.",
    problemStatement:
      "How can Snapchat maintain relevance against Meta, TikTok, and emerging platforms, and what strategic shift will enable sustainable growth beyond its core young demographic?",
    strategicPosition:
      "Initially adopting a Visionary approach as the pioneer of ephemeral content, Snapchat must transition to a more Adaptive stance as competition intensifies. The company's AR-first identity remains its strongest differentiator — Lens Studio and virtual try-ons offer monetization paths competitors haven't matched.",
    recommendations: [
      "Horizon 1 (0–1 year): Deepen AR monetization through virtual try-ons, increase engagement and retention, address regulatory data concerns proactively.",
      "Horizon 2 (1–3 years): Create immersive AR experiences for the metaverse, expand to new markets and demographics, strengthen cross-platform partnerships.",
      "Horizon 3 (3+ years): Reimagine online communication with multi-sensory and brain-computer interfaces, lead the future of ephemeral social media.",
    ],
    frameworks: [
      "STEEP Analysis",
      "Social Media Competitive Scenario",
      "BCG Strategy Palette",
      "Three-Horizon Framework",
    ],
  },
  "walmart-vs-bestbuy": {
    title: "Walmart vs Best Buy",
    subtitle: "4Ps of Marketing & Value Proposition",
    accent: "#0071ce",
    image: "/images/walmart-cover.png",
    pdfFile: "/case-studies/Walmart_vs_Best_Buy.pdf",
    overview:
      "A comparative strategic analysis of Walmart ($611B FY2023 revenue, founded 1962) and Best Buy (1,048 stores globally, founded 1966). The study examines competitive advantages, identifies market gaps, and proposes an optimal marketing mix for Best Buy to differentiate against Walmart's cost leadership and Amazon's e-commerce dominance.",
    problemStatement:
      "How can Best Buy differentiate against Walmart's everyday low prices and Amazon's e-commerce dominance, and what optimal marketing mix will sustain competitive advantage in consumer electronics?",
    strategicPosition:
      "Walmart dominates through cost leadership and one-stop shopping across a broad product range. Best Buy must differentiate not on price — where Walmart wins — but on expertise, personalized customer experience, and specialized electronics services like Geek Squad.",
    recommendations: [
      "Product: Offer personalized customer experiences, bundled discounts, protection plans, and DIY support that leverage tech expertise.",
      "Price: Maintain competitive pricing with price match guarantees while emphasizing value-added services that justify premium positioning.",
      "Place: Enhance brick-and-mortar experience with drive-thru pickup, and strengthen online presence for omnichannel coverage.",
      "Promotion: Build partnerships with non-electronic retailers (e.g., grocery chains) for cross-promotion, invest in influencer campaigns targeting tech enthusiasts.",
    ],
    frameworks: [
      "4Ps Marketing Mix",
      "Value Proposition Canvas",
      "Competitive Advantage Analysis",
      "Historical Timeline Analysis",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies[slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero with cover image */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="relative z-10 max-w-[980px] mx-auto px-6 pb-14 md:pb-20 w-full">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 13L5 8L10 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All studies
          </Link>
          <h1 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold tracking-[-0.04em] text-white leading-[0.95]">
            {study.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-white/60">
            {study.subtitle}
          </p>
        </div>
      </section>

      <CaseStudyContent study={study} />
    </main>
  );
}
