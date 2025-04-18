import Question from "./Question";

export default function FAQ() {
  return (
    <section id="faq" className="bg-beige text-dark p-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Question
          question="When do I get my plan?"
          answer="After you fill out the intake form, you'll get your first plan within 24–48 hours."
        />
        <Question
          question="Can I cancel anytime?"
          answer="Yes — you can cancel with one click in your confirmation email or through Stripe."
        />
        <Question
          question="What if I don't like it?"
          answer="You won't be charged during your free trial. Cancel within 7 days and you won't pay anything."
        />
        <Question
          question="Is it customized to my diet or goals?"
          answer="Yes — your plan is tailored to your dietary preferences, budget, and how often you shop. I meet you where you're at."
        />
        <Question
          question="What if i'm not a good cook?"
          answer="My plans are designed to match your skill level — from total beginners to meal prep pros."
        />
      </div>
    </section>
  );
}
