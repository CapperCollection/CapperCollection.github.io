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

type EpisodeType = {
  episode: number;
  title: string;
  date: string;
  locations: string[];
  antagonist: CharacterType[];
  motive: MotiveType[];
  exposedTo: ExposeType[];
  victims: CharacterType[];
};

export type EpisodesType = EpisodeType[];

export interface EpisodesProviderProps {
  children: React.ReactNode;
}

export type EpisodesContextProps = {
  episodes: EpisodesType;
};
