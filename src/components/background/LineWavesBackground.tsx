"use client";

import LineWaves from "@/components/background/LineWaves";
import "@/components/background/LineWaves.css";

export function LineWavesBackground() {
  return (
    <LineWaves
      speed={0.3}
      innerLineCount={40}
      outerLineCount={40}
      warpIntensity={1.2}
      rotation={-30}
      edgeFadeWidth={0.05}
      colorCycleSpeed={1.0}
      brightness={0.12}
      color1="#ff3b30"
      color2="#b11226"
      color3="#3b0008"
      enableMouseInteraction
      mouseInfluence={2}
    />
  );
}
