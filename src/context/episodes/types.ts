type ExposeType =
  | "Media"
  | "FBI"
  | "Company"
  | "Police"
  | "Insurance"
  | "Colleagues";

type MotiveType =
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

export type EpisodeType = {
  id: number;
  episode: number;
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
};

export type EpisodesType = EpisodeType[];

export interface EpisodesProviderProps {
  children: React.ReactNode;
}

export type EpisodesContextProps = {
  episodes: EpisodesType;
};
