"use client";
import { useEffect, useRef, useState } from "react";
import WhatYouGet from "@/components/WhatYouGet";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { trackEvent } from "./services/mixpanel";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const heroEntry = entries.find(
          (entry) => entry.target === heroRef.current
        );
        const pricingEntry = entries.find(
          (entry) => entry.target === pricingRef.current
        );
        const isHeroVisible = heroEntry?.isIntersecting ?? false;
        const isPricingVisible = pricingEntry?.isIntersecting ?? false;
        setShowStickyCTA(!isHeroVisible && !isPricingVisible);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          trackEvent("chat_button_clicked");
          window.open("https://tally.so/r/mVxOgy", "_blank");
        }}
        className="fixed bottom-18 right-4 z-50 bg-sage text-white rounded-full py-2 px-4 shadow-md hover:bg-sage-muted font-bold text-3xl"
      >
        ?
      </button>
      <div ref={heroRef}>
        <Hero />
      </div>
      <HowItWorks />
      <WhatYouGet />
      <AboutMe />
      <Testimonials />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <FAQ />

      {showStickyCTA && (
        <a
          href="#pricing"
          className="fixed bottom-0 left-0 right-0 z-50 bg-clay hover:bg-clay-muted text-white p-4 text-center shadow-md font-semibold"
        >
          Get Your Free Plan
        </a>
      )}
    </>
  );
}
