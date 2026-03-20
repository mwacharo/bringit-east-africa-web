import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time tracking technology",
  "Insurance coverage on all packages",
  "24/7 customer support",
  "Established network across Kenya",
  "Competitive pricing structure",
  "Reliable delivery timeframes",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
