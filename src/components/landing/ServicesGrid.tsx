import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";




const services = [
{
title: "Courier & Parcel Delivery",
desc: "Fast, secure, and reliable delivery solutions for documents, parcels, and business shipments with real-time tracking."
},
{
title: "International Shipping",
desc: "Seamless cross-border logistics connecting businesses and customers through efficient global shipping networks."
},
{
title: "E-commerce Fulfillment",
desc: "End-to-end order fulfillment including inventory management, picking, packing, shipping, and returns handling."
},
{
title: "Warehousing & Storage",
desc: "Flexible warehousing solutions with inventory visibility, secure storage, and scalable capacity for growing businesses."
},
{
title: "Cash on Delivery (COD)",
desc: "Trusted payment collection services that help e-commerce businesses increase conversions and customer confidence."
},
{
title: "Express & Same-Day Delivery",
desc: "Priority delivery services designed for urgent shipments requiring speed, reliability, and guaranteed handling."
},
{
title: "Medical & Healthcare Logistics",
desc: "Specialized transportation for medical supplies, pharmaceuticals, and healthcare equipment with strict handling standards."
},
{
title: "Packaging Solutions",
desc: "Professional packaging services that protect products, enhance presentation, and improve the customer unboxing experience."
},
{
title: "Order Fulfillment Services",
desc: "Complete fulfillment operations from order processing to final delivery, helping businesses scale efficiently."
},
{
title: "SME & Enterprise Logistics",
desc: "Customized logistics solutions for startups, SMEs, and large enterprises with flexible and scalable operations."
}
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
