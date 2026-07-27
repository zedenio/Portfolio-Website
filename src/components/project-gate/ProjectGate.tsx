"use client";

import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGate } from "./GateContext";
import Cubes from "./Cubes";

export function ProjectGate() {
  const { overlayVisible, completeGate } = useGate();
  const router = useRouter();
  const { theme } = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);
  const sceneWrapperRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!overlayVisible || !overlayRef.current) return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out" }
      );
    }
  }, [overlayVisible]);

  const faceColor =
    theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const borderStyle =
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.1)";

  const handleCubeClick = useCallback(() => {
    if (!sceneWrapperRef.current || !overlayRef.current) return;

    const scene = sceneWrapperRef.current.querySelector(
      ".default-animation--scene"
    ) as HTMLElement | null;
    if (scene) scene.style.pointerEvents = "none";

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        completeGate();
        router.push("/projects");
      },
    });
  }, [completeGate, router]);

  if (!overlayVisible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background:
          theme === "dark" ? "rgba(0,0,0,0.70)" : "rgba(255,255,255,0.70)",
        opacity: 0,
      }}
    >
      <div
        ref={sceneWrapperRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60%",
          maxWidth: "600px",
          aspectRatio: "1 / 1",
          transformOrigin: "center center",
        }}
      >
        <Cubes
          gridSize={8}
          maxAngle={60}
          radius={4}
          borderStyle={borderStyle}
          faceColor={faceColor}
          rippleColor={theme === "dark" ? "#ffffff" : "#000000"}
          rippleSpeed={1.5}
          autoAnimate
          rippleOnClick={false}
          onCubeClick={handleCubeClick}
        />
      </div>

      <p
        ref={labelRef}
        style={{
          fontFamily: "var(--font-general)",
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          color:
            theme === "dark"
              ? "rgba(255,255,255,0.45)"
              : "rgba(0,0,0,0.45)",
          marginTop: "1rem",
          opacity: 0,
        }}
      >
        Click any cube to enter
      </p>
    </div>
  );
}
