"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Player } from "@/types";

interface PlayerContextType {
  selectedPlayerId: string;
  setSelectedPlayerId: (id: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("1");

  return (
    <PlayerContext.Provider value={{ selectedPlayerId, setSelectedPlayerId }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}

