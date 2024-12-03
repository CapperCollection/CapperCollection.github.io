type ExposeType = "Media" | "FBI";

type MotiveType =
  | "Corporate Greed"
  | "Cash Theft"
  | "Political Greed"
  | "Money Laundering"
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
