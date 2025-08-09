import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="rounded-xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Send Your Next Package?</h2>
              <p className="text-sm/relaxed opacity-90">Join thousands of satisfied customers</p>
            </div>
            <Button variant="cta" size="lg">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
