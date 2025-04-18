import { trackClick } from "@/helpers/track_click";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="flex flex-col items-center justify-center bg-stone p-4">
        <div className="text-4xl font-bold">Simple Flexible Pricing</div>
        <div className="text-lg">
          <span className="font-bold">Start free</span> - your first week is on
          me.
        </div>
        <div className="flex flex-col space-y-3 bg-lightText shadow-lg rounded-lg p-6 m-4 w-80">
          <h2 className="text-2xl font-bold">Weekly</h2>
          <div className="flex flex-row space-x-1">
            <p className="text-lg line-through">$20.00</p>
            <p className="text-lg font-bold">$14.99</p>
          </div>
          <ul className="list-disc pl-5">
            <li>5 personalized meals</li>
            <li>Categorized grocery list</li>
            <li>Service sizes & macros</li>
            <li>Weekly iterations to improve plan</li>
          </ul>
          <a
            href="https://buy.stripe.com/14kaIr8F115igvK6or"
            className="bg-clay text-white rounded-full py-3 px-5 hover:bg-clay-muted transition-colors duration-200 text-center"
            onClick={() => trackClick("Start Free Trial", "Weekly Card")}
          >
            Start Free Trial
          </a>
          <p className="font-light italic text-center text-sm text-gray-400">
            Your first plan is completely free — built just for you, with no
            commitment.
          </p>
        </div>
        <div className="flex flex-col space-y-3 bg-lightText shadow-lg rounded-lg p-6 m-4 w-80">
          <h2 className="text-2xl font-bold">Monthly</h2>
          <div className="flex flex-row space-x-1">
            <p className="text-lg line-through">$80.00</p>
            <p className="text-lg font-bold">$49.99</p>
          </div>
          <ul className="list-disc pl-5">
            <li>Everything in weekly</li>
            <li>1:1 Coaching sessions</li>
            <li>Longer trial period</li>
          </ul>
          <a
            href="https://buy.stripe.com/dR6dUD08v7tGfrG3cg"
            className="bg-clay text-white rounded-full py-3 px-5 hover:bg-clay-muted transition-colors duration-200 text-center"
            onClick={() => trackClick("Start Free Trial", "Monthly Card")}
          >
            Start Free Trial
          </a>
          <p className="font-light italic text-center text-sm text-gray-400">
            Your first plan is completely free — built just for you, with no
            commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
