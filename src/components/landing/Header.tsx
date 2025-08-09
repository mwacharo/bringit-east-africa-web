import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/bringit-logo.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tracking", href: "#tracking" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Bringit Home">
          <img src={Logo} alt="Bringit logo - fast courier icon" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="cta" className="">Request a Quote</Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t animate-slide-in-right">
          <ul className="container mx-auto py-3 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="cta" className="w-full">Request a Quote</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
