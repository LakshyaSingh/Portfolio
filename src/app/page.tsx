"use client";

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { CaseStudies } from "@/components/CaseStudies";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { AnimatedSection } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <AnimatedSection>
      <Hero />
      <Experience />
      <CaseStudies />
      <Background />
      <Contact />
    </AnimatedSection>
  );
}
