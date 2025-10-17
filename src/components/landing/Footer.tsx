import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t py-12">
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-xl font-bold">Bringit Courier & Fulfillment</div>
          <p className="mt-2 text-sm text-muted-foreground">Fast, affordable, reliable delivery across East Africa.</p>
          <p className="mt-4 text-sm">Email: info@bringit.africa<br/>Phone: +254 105166107</p>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><a href="#services">Domestic Courier</a></li>
            <li><a href="#services">International Shipping</a></li>
            <li><a href="#services">E-commerce Fulfillment</a></li>
            <li><a href="#services">SME Logistics Support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Support</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#tracking">Tracking</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow Us</div>
          <div className="mt-2 flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
          <form className="mt-4" onSubmit={(e)=>e.preventDefault()}>
            <label className="text-sm" htmlFor="newsletter">Newsletter</label>
            <div className="mt-2 flex gap-2">
              <input id="newsletter" placeholder="Email address" className="h-10 flex-1 rounded-md border bg-background px-3 focus:ring-2 focus:ring-ring" />
              <button className="h-10 rounded-md bg-primary px-4 text-primary-foreground">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bringit Courier & Fulfillment Centre. All rights reserved.
      </div>
    </footer>
  );
}
