"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface GateContextValue {
  hasEntered: boolean;
  overlayVisible: boolean;
  requestGate: () => void;
  completeGate: () => void;
}

const GateContext = createContext<GateContextValue | null>(null);

export function GateProvider({ children }: { children: React.ReactNode }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const requestGate = useCallback(() => {
    if (!hasEntered) setOverlayVisible(true);
  }, [hasEntered]);

  const completeGate = useCallback(() => {
    setHasEntered(true);
    setOverlayVisible(false);
  }, []);

  return (
    <GateContext.Provider value={{ hasEntered, overlayVisible, requestGate, completeGate }}>
      {children}
    </GateContext.Provider>
  );
}

export function useGate() {
  const ctx = useContext(GateContext);
  if (!ctx) throw new Error("useGate must be used within GateProvider");
  return ctx;
}
