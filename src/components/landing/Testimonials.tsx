import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";

const testimonials = [
  {
    name: "Amina, Nairobi",
    text: "Bringit transformed our online store delivery times. Customers are happier than ever!",
    avatar: avatar1,
  },
  {
    name: "John, Kampala",
    text: "Reliable and affordable. Tracking keeps our team and clients in the loop.",
    avatar: avatar2,
  },
  {
    name: "Grace, Dar es Salaam",
    text: "Excellent cross-border logistics. Highly recommend for SMEs.",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <div className="relative mt-8">
          <Carousel>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-lg border p-6 h-full flex flex-col animate-fade-in">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={`${t.name} avatar`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium">{t.name}</div>
                    </div>
                    <p className="mt-4 text-muted-foreground">“{t.text}”</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
