
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Bringit provide?",
    answer:
      "Bringit offers courier delivery, e-commerce fulfillment, warehousing, order fulfillment, Cash on Delivery (COD), express delivery, packaging solutions, international shipping, and specialized logistics services for businesses of all sizes.",
  },
  {
    question: "Can Bringit handle my entire order fulfillment process?",
    answer:
      "Yes. We manage the complete fulfillment cycle, including inventory storage, order processing, picking, packing, shipping, delivery, and returns management, allowing you to focus on growing your business.",
  },
  {
    question: "Do you provide warehousing and inventory management?",
    answer:
      "Absolutely. Our warehousing solutions include secure storage, inventory visibility, stock management, and scalable space to support seasonal demand and business growth.",
  },
  {
    question: "How does Cash on Delivery (COD) work?",
    answer:
      "When a customer places an order, Bringit delivers the package and collects payment on your behalf. The collected funds are then remitted to your business according to agreed settlement schedules.",
  },
  {
    question: "Can Bringit integrate with my e-commerce store?",
    answer:
      "Yes. We support integrations with online stores, marketplaces, and business systems to streamline order processing, inventory updates, shipment tracking, and fulfillment operations.",
  },
  {
    question: "Do you offer same-day and express delivery services?",
    answer:
      "Yes. Our express delivery solutions are designed for urgent shipments, providing fast, reliable, and time-sensitive delivery options where available.",
  },
  {
    question: "Can you handle product returns and reverse logistics?",
    answer:
      "Yes. We provide returns management and reverse logistics services to help merchants efficiently process returned items, exchanges, and customer refunds.",
  },
  {
    question: "What types of businesses use Bringit?",
    answer:
      "Our services support e-commerce brands, retailers, wholesalers, healthcare providers, manufacturers, distributors, startups, SMEs, and enterprise organizations seeking reliable logistics solutions.",
  },
  {
    question: "Do you provide packaging services?",
    answer:
      "Yes. We offer professional packaging solutions, including standard packaging, branded packaging, fragile-item handling, and gift packaging to ensure products arrive safely and create a positive customer experience.",
  },
  {
    question: "Can Bringit support international shipping?",
    answer:
      "Yes. We provide international shipping and cross-border logistics solutions, helping businesses reach customers in multiple markets while maintaining shipment visibility throughout the delivery journey.",
  },
  {
    question: "How can I track shipments and orders?",
    answer:
      "Bringit provides real-time shipment tracking and delivery updates, allowing merchants and customers to monitor orders from dispatch to final delivery.",
  },
  {
    question: "Is Bringit suitable for small businesses and startups?",
    answer:
      "Absolutely. Our logistics and fulfillment services are designed to scale with your business, making them ideal for startups, growing online stores, SMEs, and large enterprises.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight">
Merchant Logistics & Fulfillment FAQs          </h2>

<h3 className="mt-4 text-lg text-muted-foreground">
Find answers about order fulfillment, warehousing, courier delivery, inventory management, Cash on Delivery (COD), e-commerce shipping, international logistics, and fulfillment center services.          </h3>

          <p className="mt-4 text-lg text-muted-foreground">
            Learn how Bringit helps businesses streamline courier delivery,
            warehousing, e-commerce fulfillment, inventory management,
            cash-on-delivery collection, packaging, and international shipping.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

