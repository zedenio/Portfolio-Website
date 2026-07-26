import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch",
};

export default function ContactPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="text-[0.95rem] font-medium uppercase"
          style={{
            fontFamily: "var(--font-general)",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Contact
        </p>
        <h1
          className="mt-6 font-bold"
          style={{
            fontFamily: "var(--font-clash)",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#FFFFFF",
          }}
        >
          Get in touch
        </h1>
        <p
          className="mt-8 text-lg leading-relaxed"
          style={{
            fontFamily: "var(--font-inter)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Coming soon.
        </p>
      </div>
    </section>
  );
}
