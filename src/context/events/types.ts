type EventTypeType =
  | "TitleDrop"
  | "AlternatePlans"
  | "BoomGoesTheDynamite"
  | "ConName"
  | "LetsGoStealA"
  /* Character Development */
  | "BlastFromThePast"
  | "CharacterIntroduction"
  | "Flashback"
  | "NewJobUnlocked"
  | "PriorThefts"
  /* Story Elements */
  | "BetrayalMostFoul"
  | "DirtyEvenForUs"
  | "NotableQuotes"
  | "Outmaneuvered"
  | "RecurringMaguffin"
  | "RomanticMoments"
  | "SomeoneIsAngry"
  | "TastefulCutAway"
  | "TheGrifter"
  /* Thief Moments */
  | "TheLift"
  /* Hardison Moments */
  | "AgeOfThe"
  | "AlecTheHacker"
  | "OhHellNo"
  | "ThrowHardissonFromTheX"
  /* Nate Moments */
  | "NateDoesntLikeHospitals"
  | "NateTheDrunk"
  | "TheMastermind"
  /* Elliot Moments" */
  | "ElliotTheChef"
  | "ElliotTheHitter"
  | "IDontLikeGuns"
  | "ItsAVeryDistinctive"
  /* Sophie Moments */
  | "SophieTheActingCoach"
  | "SophieTheActress"
  /* Parker Moments */
  | "ComeFlyWithMe"
  | "ParkerIsCrazy"
  | "ParkerTheThief"
  /* References to Pop Culture */
  | "TheSting";

type MainCharactersType =
  | "Nate Ford"
  | "Sophie Devereaux"
  | "Parker"
  | "Hardison"
  | "Elliot Spencer";

export type EventType = {
  episode: number;
  context: string;
  timestamp: string;
  character: MainCharactersType | string;
  subject: string;
  text?: string[];
  type: EventTypeType;
};

export type EventsTypes = EventType[];

export interface EventsProviderProps {
  children: React.ReactNode;
}

export type EventsContextType = {
  events: EventsTypes;
  eventFilters: Set<string>;
  updateEventFilters: (filter: string) => void;
};
