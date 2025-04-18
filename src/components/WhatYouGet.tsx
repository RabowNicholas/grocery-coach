import React from "react";

const WhatYouGet = () => {
  return (
    <div className="bg-wheat-muted p-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        What You Get Every Week
      </h2>
      <ul className="list-disc list-inside text-left">
        <ul className="list-disc list-inside text-left space-y-2">
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
      </ul>
    </div>
  );
};

export default WhatYouGet;
