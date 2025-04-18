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
import { trackClick } from "@/helpers/track_click";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("page_viewed", {
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      referrer: document.referrer,
    });
  }, []);

  useEffect(() => {
    const sectionMap = [
      { id: "hero", name: "Hero" },
      { id: "how-it-works", name: "HowItWorks" },
      { id: "what-you-get", name: "WhatYouGet" },
      { id: "about-me", name: "AboutMe" },
      { id: "testimonials", name: "Testimonials" },
      { id: "pricing", name: "Pricing" },
      { id: "faq", name: "FAQ" },
    ];

    const seen = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sectionMap.find((s) => s.id === entry.target.id);
            if (section && !seen.has(section.name)) {
              seen.add(section.name);
              trackEvent("section_viewed", { section_name: section.name });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionMap.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          onClick={() => trackClick("Get Your Free Plan", "Sticky")}
        >
          Get Your Free Plan
        </a>
      )}
    </>
  );
}
