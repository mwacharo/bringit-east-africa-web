import vanImage from "@/assets/van-bringit.jpg";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold">About Bringit</h2>
          <p className="mt-4 text-muted-foreground">
            We are a premium logistics partner providing same-day courier and end-to-end fulfillment across East Africa. Our mission is to make delivery fast, affordable, and trustworthy for businesses and individuals alike.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border p-4 text-center">
              <div className="text-2xl font-bold">500k+</div>
              <div className="text-xs text-muted-foreground">Packages Delivered</div>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-xs text-muted-foreground">Cities Served</div>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={vanImage} alt="Bringit delivery van on East African road" className="rounded-xl border w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
