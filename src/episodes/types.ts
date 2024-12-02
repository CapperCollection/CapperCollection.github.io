type EpisodeType = {
  episode: number;
  title: string;
  date: string;
  locations: string[];
  antagonist: string[];
  motive: string[];
  exposed: string;
};

export type EpisodesType = EpisodeType[];
