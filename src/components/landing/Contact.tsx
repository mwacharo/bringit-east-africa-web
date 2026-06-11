"use client";

import { useState } from "react";

const COUNTRY_OPTIONS = [
  { code: "KE", dialCode: "+254", flag: "🇰🇪", label: "Kenya" },
  { code: "RW", dialCode: "+250", flag: "🇷🇼", label: "Rwanda" },
  { code: "UG", dialCode: "+256", flag: "🇺🇬", label: "Uganda" },
  { code: "TZ", dialCode: "+255", flag: "🇹🇿", label: "Tanzania" },
//   { code: "US", dialCode: "+1",   flag: "🇺🇸", label: "United States" },
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = COUNTRY_OPTIONS.find((c) => c.code === e.target.value);
    if (found) setSelectedCountry(found);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* LEFT — Form */}
        <div style={styles.formCol}>
          <h2 style={styles.heading}>Let's Talk!</h2>
          <p style={styles.subheading}>
            Get in touch with us using the enquiry form or contact details below.
          </p>

          {/* Full Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="fullName">
              Full Name <span style={styles.required}>*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Email + Phone */}
          <div style={styles.row}>
            <div style={{ ...styles.fieldGroup, flex: 1 }}>
              <label style={styles.label} htmlFor="email">
                Email <span style={styles.required}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={{ ...styles.fieldGroup, flex: 1 }}>
              <label style={styles.label} htmlFor="phone">
                Phone Number <span style={styles.required}>*</span>
              </label>
              <div style={styles.phoneWrapper}>
                <span style={styles.phoneIcon}>📞</span>
                <div style={styles.countrySelectWrapper}>
                  <span style={styles.flagDisplay}>{selectedCountry.flag}</span>
                  <select
                    aria-label="Country code"
                    value={selectedCountry.code}
                    onChange={handleCountryChange}
                    style={styles.countrySelect}
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.label} ({c.dialCode})
                      </option>
                    ))}
                  </select>
                  <span style={styles.chevron}>⌄</span>
                </div>
                <span style={styles.dialCode}>{selectedCountry.dialCode}</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="7XX XXX XXX"
                  value={form.phone}
                  onChange={handleChange}
                  style={styles.phoneInput}
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="subject">
              Subject <span style={styles.required}>*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={form.subject}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: "#e07040" }}
            />
          </div>

          {/* Message */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="message">
              Message <span style={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type something..."
              value={form.message}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "sending" || status === "sent"}
            style={{
              ...styles.submitBtn,
              opacity: status === "sending" ? 0.75 : 1,
              cursor: status === "sending" ? "wait" : "pointer",
            }}
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Message Sent ✓"
              : "Send Message"}
          </button>
        </div>

        {/* RIGHT — Quick Contact card */}
        <div style={styles.rightCol}>
          <div style={styles.quickCard}>
            <h3 style={styles.quickTitle}>Quick Contact</h3>

            <div style={styles.quickGrid}>
              {/* Email */}
              <div style={styles.quickItem}>
                <div style={styles.iconBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.quickLabel}>Email</p>
                  <a href="mailto:info@rushbincourier.com" style={styles.quickValue}>
                    info@bringitafrica.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={styles.quickItem}>
                <div style={styles.iconBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.quickLabel}>Phone</p>
                                    <p style={styles.quickValue}>🇰🇪 +254 116349137</p>

                  <p style={styles.quickValue}>🇰🇪 +254 741821113</p>
                  {/* <p style={styles.quickValue}>🇷🇼 +250 700 000 000</p> */}
                </div>
              </div>

              {/* Offices */}
              <div style={{ ...styles.quickItem, gridColumn: "1 / -1" }}>
                <div style={styles.iconBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p style={styles.quickLabel}>Offices</p>
<p style={styles.quickValue}>
  🇰🇪 Vision Plaza, Mombasa Road, Nairobi
</p>                  {/* <p style={styles.quickValue}>🇷🇼 Kigali, Rwanda</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "64px 24px",
    background: "#fff",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "start",
  },
  formCol: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 8px",
  },
  subheading: {
    fontSize: 14,
    color: "#666",
    margin: "0 0 28px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#222",
    marginBottom: 6,
  },
  required: {
    color: "#e07040",
  },
  input: {
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "10px 14px",
    fontSize: 14,
    color: "#333",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: "10px 14px",
    fontSize: 14,
    color: "#333",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  phoneWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: 6,
    overflow: "hidden",
    height: 40,
  },
  phoneIcon: {
    padding: "0 8px",
    fontSize: 14,
    borderRight: "1px solid #ddd",
    lineHeight: "40px",
  },
  countrySelectWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid #ddd",
    padding: "0 6px",
  },
  flagDisplay: {
    fontSize: 16,
    pointerEvents: "none",
  },
  countrySelect: {
    position: "absolute",
    inset: 0,
    opacity: 0,
    cursor: "pointer",
    fontSize: 13,
    border: "none",
    background: "transparent",
  },
  chevron: {
    fontSize: 11,
    color: "#888",
    marginLeft: 2,
  },
  dialCode: {
    padding: "0 8px",
    fontSize: 14,
    color: "#333",
    borderRight: "1px solid #ddd",
  },
  phoneInput: {
    flex: 1,
    border: "none",
    padding: "0 12px",
    fontSize: 14,
    color: "#333",
    outline: "none",
    height: "100%",
  },
  submitBtn: {
    marginTop: 8,
    background: "#405de0",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "12px 28px",
    fontSize: 15,
    fontWeight: 600,
    alignSelf: "flex-start",
    transition: "background 0.2s",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  quickCard: {
    border: "1.5px solid #f0d4c4",
    borderRadius: 12,
    padding: "28px 24px",
    background: "#fff",
  },
  quickTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 20px",
  },
  quickGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  quickItem: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 8,
    background: "#fff4ee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  quickLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#222",
    margin: "0 0 4px",
  },
  quickValue: {
    fontSize: 13,
    color: "#555",
    margin: "0 0 2px",
    textDecoration: "none",
  },
};