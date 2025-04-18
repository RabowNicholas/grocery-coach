"use client";
import React from "react";
import { trackEvent } from "@/app/services/mixpanel";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[40vh] text-darkText">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I Plan Your Meals, So You Don’t Have To
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Personalized, budget-friendly meals — built by a real human, for
            your real life. Your first week is free.
          </p>
          <div className="flex space-x-4">
            <a
              href="#pricing"
              className="bg-clay text-white rounded-full py-3 px-5 hover:bg-clay-muted transition-colors duration-200"
              onClick={() => trackEvent("click")}
            >
              Get Your Free Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
