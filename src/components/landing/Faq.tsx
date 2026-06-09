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

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 pb-10 border-b border-border">
          <div className="flex-1 min-w-[280px]">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-4">
              Help Center
            </span>
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              Merchant Logistics &amp; Fulfillment
              <br />
              <span className="text-primary">FAQs</span>
            </h2>
          </div>

          <p className="flex-1 min-w-[240px] max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Everything you need to know about fulfillment, warehousing, COD,
            e-commerce shipping, and international logistics.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="flex items-center gap-5 py-6 text-left hover:no-underline group">
                {/* Index number */}
                <span className="shrink-0 w-8 text-xs font-bold tracking-wide text-primary opacity-50 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question text */}
                <span className="flex-1 text-base font-semibold leading-snug group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </span>
              </AccordionTrigger>

              <AccordionContent className="pl-[52px] pb-6">
                <p className="text-[15px] leading-relaxed text-muted-foreground border-l-2 border-primary pl-4">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-muted/40 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-base font-semibold mb-1">Still have questions?</p>
            <p className="text-sm text-muted-foreground">
              Our logistics team is ready to help you get started.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground text-sm font-bold tracking-wide px-7 py-3 rounded-md no-underline hover:opacity-90 transition-opacity shrink-0"
          >
            Talk to us →
          </a>
        </div>

      </div>
    </section>
  );
}