import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Globe,
  ShoppingCart,
  Warehouse,
  Banknote,
  Zap,
  Stethoscope,
  Box,
  ClipboardList,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Courier & Parcel Delivery",
    desc: "Fast, secure, and reliable delivery for documents, parcels, and business shipments with real-time tracking.",
    icon: Package,
    accent: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    title: "International Shipping",
    desc: "Seamless cross-border logistics connecting businesses and customers through efficient global networks.",
    icon: Globe,
    accent: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    title: "E-commerce Fulfillment",
    desc: "End-to-end order fulfillment including inventory management, picking, packing, shipping, and returns.",
    icon: ShoppingCart,
    accent: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    title: "Warehousing & Storage",
    desc: "Flexible warehousing with inventory visibility, secure storage, and scalable capacity for growing businesses.",
    icon: Warehouse,
    accent: "#10B981",
    bg: "#ECFDF5",
  },
  {
    title: "Cash on Delivery (COD)",
    desc: "Trusted payment collection services that help e-commerce businesses increase conversions and confidence.",
    icon: Banknote,
    accent: "#059669",
    bg: "#ECFDF5",
  },
  {
    title: "Express & Same-Day Delivery",
    desc: "Priority delivery services designed for urgent shipments requiring speed, reliability, and guaranteed handling.",
    icon: Zap,
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    title: "Medical & Healthcare Logistics",
    desc: "Specialized transport for medical supplies, pharmaceuticals, and equipment with strict handling standards.",
    icon: Stethoscope,
    accent: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    title: "Packaging Solutions",
    desc: "Professional packaging that protects products, enhances presentation, and improves the unboxing experience.",
    icon: Box,
    accent: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    title: "Order Fulfillment Services",
    desc: "Complete operations from order processing to final delivery, helping businesses scale efficiently.",
    icon: ClipboardList,
    accent: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    title: "SME & Enterprise Logistics",
    desc: "Customized logistics for startups, SMEs, and large enterprises with flexible and scalable operations.",
    icon: Building2,
    accent: "#0EA5E9",
    bg: "#F0F9FF",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}
    >
      <style>{`
        .service-card {
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          background: #FFFFFF;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px -8px rgba(15, 28, 46, 0.12);
          border-color: transparent;
        }
        .service-card:hover .icon-wrap {
          transform: scale(1.08);
        }
        .icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          transition: transform 0.22s ease;
          flex-shrink: 0;
        }
        .services-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #F59E0B;
          margin-bottom: 12px;
        }
        .services-heading {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #0F1C2E;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .services-sub {
          color: #64748B;
          font-size: 1rem;
          max-width: 520px;
          line-height: 1.65;
        }
        .card-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #0F1C2E;
          line-height: 1.3;
          margin: 0;
        }
        .card-desc {
          font-size: 0.8125rem;
          color: #64748B;
          line-height: 1.6;
          margin-top: 6px;
        }
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        @media (min-width: 640px) {
          .grid-layout { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .grid-layout { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1280px) {
          .grid-layout { grid-template-columns: repeat(5, 1fr); }
        }
        .card-inner {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
        }
        .card-body {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div>
          <span className="services-eyebrow">What we offer</span>
          {/* <h2 className="services-heading">
            End-to-end logistics,<br />built for your business
          </h2>
          <p className="services-sub">
            From same-day courier runs to enterprise-scale warehousing — every service you need under one roof.
          </p> */}
        </div>

        {/* Grid */}
        <div className="grid-layout">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card">
                <div className="card-inner">
                  <span
                    className="icon-wrap"
                    style={{ background: s.bg }}
                  >
                    <Icon size={22} strokeWidth={2} color={s.accent} />
                  </span>
                  <div className="card-body">
                    <p className="card-title">{s.title}</p>
                    <p className="card-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}