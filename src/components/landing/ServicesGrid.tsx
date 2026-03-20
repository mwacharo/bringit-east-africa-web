import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { title: "Domestic Courier", desc: "Local delivery solutions for cities and towns." },
  { title: "International Shipping", desc: "Cross-border logistics across Kenya ." },
  { title: "E-commerce Fulfillment", desc: "Warehousing, picking, packing, and last-mile delivery." },
  { title: "SME Logistics Support", desc: "Flexible, scalable logistics for small businesses." },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="group hover:shadow-elegant transition-all animate-fade-in">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
