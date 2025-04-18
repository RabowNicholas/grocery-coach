import React from "react";

interface TestimonialCardProps {
  color: string;
  text: string;
  name: string;
}

export default function TestimonialCard({
  color,
  text,
  name,
}: TestimonialCardProps) {
  return (
    <div
      className={`${color} text-darkText p-6 rounded-lg shadow-md w-full max-w-sm mx-4 mb-6 flex flex-col items-center text-center`}
    >
      <p className="mb-4 italic">&ldquo;{text}&rdquo;</p>
      <p>{name}</p>
    </div>
  );
}
