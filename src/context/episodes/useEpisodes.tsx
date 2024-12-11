import React from "react";
import { EpisodesContextProps, EpisodesProviderProps } from "./types";

import { episodes } from "./episodes";

const EpisodesContext = React.createContext<EpisodesContextProps | undefined>(
  undefined
);

export const useEpisodes = () => {
  const context = React.useContext(EpisodesContext);
  if (!context) {
    throw new Error("useEpisodes must be used within a EpisodesProvider");
  }
  return context;
};

export const EpisodesProvider: React.FC<EpisodesProviderProps> = ({
  children,
}: EpisodesProviderProps) => {
  const exposedState = { episodes: episodes };

  return (
    <EpisodesContext.Provider value={exposedState}>
      {children}
    </EpisodesContext.Provider>
  );
};
