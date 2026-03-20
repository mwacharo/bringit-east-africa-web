import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bringit.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative isolate"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--background) / 0.15), transparent 40%)`,
          }}
        />

        <div className="container mx-auto flex min-h-[70vh] items-center py-16">
          <div className="max-w-2xl animate-enter">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fast. Affordable. Reliable Delivery Across Kenya.
            </h1>
            <p className="mt-4 text-lg text-white">
              Bringit Courier & Fulfillment Centre delivers packages with speed and precision across Kenya ,powered by real-time tracking.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero">Request a Quote</Button>
              <Button variant="outline">Track Your Parcel</Button>
            </div>

            {/* Tracking Widget */}
            <form id="tracking" className="mt-8" onSubmit={(e)=>e.preventDefault()} aria-label="Track your parcel">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Enter tracking number"
                  className="flex-1 h-12 rounded-md border bg-background px-4 outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Tracking number"
                />
                <Button type="submit" variant="default" className="h-12">
                  <Search />
                  Track
                </Button>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Kenya</span>
                {/* <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Uganda</span> */}
                {/* <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Tanzania</span> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
