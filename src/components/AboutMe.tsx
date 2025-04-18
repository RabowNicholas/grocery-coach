import { trackClick } from "@/helpers/track_click";
import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/me.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-lightText p-8 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-8 text-lg text-left ">
          I’m Nicholas — a coach, a builder, and the kind of person who actually
          enjoys grocery shopping. I’ve always found peace in planning meals and
          figuring out how to make food both nourishing and affordable. Over the
          years, I’ve helped friends, family, and now clients feel less stressed
          about what to eat and how to shop — and more confident in their
          choices. I started Grocery Coach to bring that kind of clarity to more
          people. My background is in product and coaching, and I care just as
          much about how things feel as how they work. When I’m not building or
          planning meals, you’ll find me in the kitchen trying new recipes,
          walking my dog, or finding excuses to go to a restaurant.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Meal Planning Nerd</h2>
            <p className="text-sm">with a coaching mindset</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">30+ Plans Built</h2>
            <p className="text-sm">for real people with real goals</p>
          </div>
        </div>
        <a
          href="https://calendly.com/ndr-business-consulting/grocery-coach-1-1-w-nick"
          className="bg-sage text-darkText rounded-full py-3 px-5 hover:bg-sage-muted transition-colors duration-200"
          onClick={() => trackClick("Book a Call", "AboutMe Section")}
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
