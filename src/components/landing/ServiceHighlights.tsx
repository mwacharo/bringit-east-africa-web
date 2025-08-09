import { Zap, Map, Tag, ShoppingCart } from "lucide-react";

const items = [
  { icon: Zap, title: "Same-Day Delivery", desc: "Delivered within hours" },
  { icon: Map, title: "Regional Coverage", desc: "Serving 3+ countries reliably" },
  { icon: Tag, title: "Competitive Rates", desc: "Transparent, affordable pricing" },
  { icon: ShoppingCart, title: "E-commerce Ready", desc: "Seamless fulfillment solutions" },
];

export default function ServiceHighlights() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-lg border p-6 hover:shadow-elegant transition-all animate-fade-in">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
