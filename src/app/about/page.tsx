import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me and my work",
};

export default function AboutPage() {
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
          About
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
          A bit about me
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
