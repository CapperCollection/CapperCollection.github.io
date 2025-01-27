type ExposeType =
  | "Clients"
  | "Media"
  | "FBI"
  | "Company"
  | "Police"
  | "Insurance"
  | "Court"
  | "Colleagues";

type MotiveType =
  | "Addiction"
  | "Blame Shift"
  | "Corruption"
  | "Corporate Greed"
  | "Cash Theft"
  | "Political Greed"
  | "Money Laundering"
  | "Insurance Fraud"
  | "Mobster Greed";

type CharacterType = {
  name: string;
  occupation: string;
};

type RealLifeEvent = {
  description: string;
  link: string;
};

export type EpisodeType = {
  id: number;
  eps: number;
  description: string;
  turn: string;
  title: string;
  date: string;
  locations: string[];
  antagonist: CharacterType[];
  motive: MotiveType[];
  exposedTo: ExposeType[];
  victims: CharacterType[];
  link: string;
  realLifeEvents: RealLifeEvent[];
};

export type EpisodesType = EpisodeType[];

export interface EpisodesProviderProps {
  children: React.ReactNode;
}

export type EpisodesContextProps = {
  episodes: EpisodesType;
  updateEpisodeFilters: (filter: string) => void;
  episodeFilters: Set<string>;
};
