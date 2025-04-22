"use client";
import { useEffect } from "react";
import { trackEvent } from "@/services/mixpanel";
import { trackClick } from "@/helpers/track_click";
import Image from "next/image";

export default function RiceBowlLandingPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("page_viewed", {
      page: "Rice Bowl Plan",
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      referrer: document.referrer,
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center bg-lightText text-darkText">
      <h1 className="text-4xl font-bold mb-2">Fuel Your Week With Flavor</h1>
      <p className="text-xl text-gray-600 mb-6">
        3 high-protein rice bowls that taste good, look good, and actually keep
        you full.
      </p>

      <p className="text-gray-700 mb-6">
        For less than the cost of a protein bar, you'll save hours of
        decision-making and eat better all week.
      </p>

      <ul className="text-left text-gray-700 mb-10 space-y-1">
        <li>✅ 3 easy-to-make, high-protein meals</li>
        <li>✅ Categorized grocery list</li>
        <li>✅ Planning template in Notion</li>
        <li>✅ Ready in under 30 minutes</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
        <div>
          <Image
            src="/recipes/cajun_shrimp.jpg"
            alt="Cajun Shrimp Bowl"
            className="rounded-xl"
            width={500}
            height={500}
          />
          <p className="text-sm text-gray-600 text-center mt-2">
            Cajun Shrimp – 38g protein, fast & spicy
          </p>
        </div>
        <div>
          <Image
            src="/recipes/bulgogi.jpg"
            alt="Bulgogi Beef Bowl"
            className="rounded-xl"
            width={500}
            height={500}
          />
          <p className="text-sm text-gray-600 text-center mt-2">
            Bulgogi Beef – Korean-inspired with sweet & savory flavor
          </p>
        </div>
        <div>
          <Image
            src="/recipes/chicken_souvlaki.jpg"
            alt="Souvlaki Chicken Bowl"
            className="rounded-xl"
            width={500}
            height={500}
          />
          <p className="text-sm text-gray-600 text-center mt-2">
            Souvlaki Chicken – Mediterranean, bright, and protein-packed
          </p>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      <a
        href="https://buy.stripe.com/bIY2bVf3p7tGa7m005"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("Buy Rice Bowl Plan", "Hero CTA")}
        className="inline-block bg-sage text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sage-muted transition"
      >
        Get the Plan – $6
      </a>

      <p className="text-sm text-gray-500 mt-4">
        Over 120 people have used this plan to save time and hit their macros.
      </p>
    </div>
  );
}
