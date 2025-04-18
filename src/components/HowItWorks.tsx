import Image from "next/image";
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-sage-muted p-4">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark">
          How It Works
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex-1 flex items-start space-x-3">
            <Image
              src="/icons/form.png"
              alt="Form Icon"
              width={32}
              height={32}
            />
            <p className="text-muted">
              Answer a few questions so I can tailor your meals
            </p>
          </div>
          <div className="flex-1 flex items-start space-x-3">
            <Image
              src="/icons/plate.png"
              alt="Plate Icon"
              width={32}
              height={32}
            />
            <p className="text-muted">
              You'll get your first plan with meals and a grocery list within a
              day
            </p>
          </div>
          <div className="flex-1 flex items-start space-x-3">
            <Image
              src="/icons/calendar_like.png"
              alt="Calendar Icon"
              width={32}
              height={32}
            />
            <p className="text-muted">
              Each week's plan is brand new – improved based on what you liked
              and what worked
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
