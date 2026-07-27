"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LineWaves from "@/components/background/LineWaves";
import "@/components/background/LineWaves.css";

const themeColors = {
  dark: {
    color1: "#ff2d2d",
    color2: "#d10000",
    color3: "#550000",
    brightness: 0.12,
  },
  light: {
    color1: "#000000",
    color2: "#1A1A1A",
    color3: "#555555",
    brightness: 0.35,
  },
};

export function LineWavesBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = mounted && theme === "light" ? themeColors.light : themeColors.dark;

  return (
    <LineWaves
      speed={0.3}
      innerLineCount={40}
      outerLineCount={40}
      warpIntensity={1.2}
      rotation={-30}
      edgeFadeWidth={0.05}
      colorCycleSpeed={1.0}
      brightness={colors.brightness}
      color1={colors.color1}
      color2={colors.color2}
      color3={colors.color3}
      enableMouseInteraction
      mouseInfluence={2}
    />
  );
}
