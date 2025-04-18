import React from "react";
import Image from "next/image";
import { trackClick } from "@/helpers/track_click";

const WhatYouGet = () => {
  return (
    <div id="about-me" className="bg-wheat-muted p-4">
      <h2 className="text-4xl font-bold text-center mb-8">
        What You Get Every Week
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
        <ul className="list-disc list-inside text-left space-y-2 md:w-1/2">
          <li>
            <span className="font-bold">Flexible meals</span> that fit your
            routine and food preferences
          </li>
          <li>
            <span className="font-bold">Organized grocery list</span> that saves
            time at the store
          </li>
          <li>
            <span className="font-bold">Prep tips & portion guidance</span> to
            help you cook smarter
          </li>
          <li>
            <span className="font-bold">Personalized updates</span> based on
            what works best for you
          </li>
        </ul>
        <a
          href="https://www.notion.so/March-10th-Plan-1d9448b0512780c48e22eb6ca2f00223?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          onClick={() =>
            trackClick("Tap to Preview an actual plan", "What You Get Section")
          }
        >
          <div className="md:w-1/2 text-center">
            <p className="text-sm text-muted text-center mb-2">
              Tap to preview an actual plan
            </p>

            <Image
              src="/example_plan_screenshot.jpeg"
              alt="Example Meal Plan Preview"
              className="rounded-lg shadow-md"
              width={400}
              height={200}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default WhatYouGet;
