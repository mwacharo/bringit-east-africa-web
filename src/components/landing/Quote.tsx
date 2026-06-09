import { useState } from "react";

const BUSINESS_TYPES = [
  "Retailer",
  "Wholesaler",
  "Manufacturer",
  "E-commerce",
  "Distributor",
  "Other",
];

const ORDER_VOLUMES = [
  "Less than 100",
  "100 – 500",
  "500 – 2,000",
  "2,000 – 10,000",
  "10,000+",
];

const COUNTRIES = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Ethiopia",
//   "Nigeria",
  "Ghana",
  "South Africa",
  "Zimbabwe",
  "Zambia",
];

const REACH_OPTIONS = ["Call", "Email", "SMS", "WhatsApp"] as const;
type ReachOption = (typeof REACH_OPTIONS)[number];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  businessType: string;
  monthlyOrderVolume: string;
  targetCountries: string[];
  reachMethod: ReachOption | "";
  needs: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  website: "",
  businessType: "",
  monthlyOrderVolume: "",
  targetCountries: [],
  reachMethod: "",
  needs: "",
};

export default function PartnerForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleCountry = (country: string) => {
    setForm((prev) => ({
      ...prev,
      targetCountries: prev.targetCountries.includes(country)
        ? prev.targetCountries.filter((c) => c !== country)
        : [...prev.targetCountries, country],
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
          <svg
            className="w-7 h-7 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Application submitted!
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-sm">
          Thank you for applying to partner with Bringit. We'll be in touch
          soon.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-2 text-sm text-orange-600 hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <section id="quote" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Partner with Bringit
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Join our network as a 3PL (Third-Party Logistics) partner and expand
            your business across Africa
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          {/* Row 1: Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                First Name <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                className="h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Last Name <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                className="h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Email <span className="text-orange-600">*</span>
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Phone Number <span className="text-orange-600">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 h-10 px-3 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-600 whitespace-nowrap select-none">
                  <span>🇰🇪</span>
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>+254</span>
                </div>
                <input
                  type="text"
                  placeholder="7XX XXX XXX"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="flex-1 h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Company + Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Company Name <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Company Ltd"
                value={form.companyName}
                onChange={(e) => set("companyName", e.target.value)}
                className="h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                placeholder="https://yourcompany.com"
                value={form.website}
                onChange={(e) => set("website", e.target.value)}
                className="h-10 px-3 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Row 4: Business Type + Monthly Volume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Business Type <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <select
                  value={form.businessType}
                  onChange={(e) => set("businessType", e.target.value)}
                  className="w-full h-10 pl-3 pr-8 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                >
                  <option value="" disabled>
                    Select your business type
                  </option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Monthly Order Volume <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <select
                  value={form.monthlyOrderVolume}
                  onChange={(e) => set("monthlyOrderVolume", e.target.value)}
                  className="w-full h-10 pl-3 pr-8 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                >
                  <option value="" disabled>
                    Select monthly order volume
                  </option>
                  {ORDER_VOLUMES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Target Countries */}
          <div className="mb-5 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Target Countries
            </label>
            <div className="relative">
              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) toggleCountry(e.target.value);
                }}
                className="w-full h-10 pl-3 pr-8 rounded-lg border border-gray-300 text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              >
                <option value="" disabled>
                  Select countries to add
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {form.targetCountries.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {form.targetCountries.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-medium"
                  >
                    {c}
                    <button
                      type="button"
                      onClick={() => toggleCountry(c)}
                      className="hover:text-orange-900 transition"
                      aria-label={`Remove ${c}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
            <p className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                />
              </svg>
              Select the countries where you plan to operate
            </p>
          </div>

          {/* How to reach */}
          <div className="mb-5">
            <p className="text-sm font-medium text-gray-700 mb-2">
              How should we reach you?{" "}
              <span className="text-orange-600">*</span>
            </p>
            <div className="flex flex-wrap gap-5">
              {REACH_OPTIONS.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="reachMethod"
                    value={option}
                    checked={form.reachMethod === option}
                    onChange={() =>
                      setForm((prev) => ({ ...prev, reachMethod: option }))
                    }
                    className="accent-orange-600 w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              We'll use the phone number and email address you provided above to
              contact you.
            </p>
          </div>

          {/* Needs */}
          <div className="mb-6 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Tell Us About Your Needs
            </label>
            <textarea
              rows={4}
              placeholder="Share details about your current fulfillment challenges and what you're looking for in a partner..."
              value={form.needs}
              onChange={(e) => set("needs", e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-150"
          >
            Submit Application
          </button>
        </div>
      </div>
    </section>
  );
}