import TestimonialCard from "./TestimonialsCard";

const testimonials = [
  {
    text: "We cook together so still get that vibe — but all of the stress of planning is taken care of.",
    color: "bg-stone-muted",
    name: "Abriana",
  },
  {
    text: "It’s so helpful having the nutrition and serving sizes laid out — it makes meal prep for the whole week a no-brainer.",
    color: "bg-clay-muted",
    name: "Hannah",
  },
  {
    text: "The new ingredients and flavor combos were so fun, and the grocery list made shopping feel way less chaotic.",
    color: "bg-sage-muted",
    name: "Early Client",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="text-4xl font-bold p-4">
        A Few Words From People Who've Tried It
      </div>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          color={testimonial.color}
          text={testimonial.text}
          name={testimonial.name}
        />
      ))}
    </div>
  );
}
