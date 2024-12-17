type EventTypeType =
  | "TitleDrop"
  | "AlternatePlans"
  | "LetsGoStealA"
  | "ConName"
  /* Character Development */
  | "CharacterIntroduction"
  | "Flashback"
  | "BlastFromThePast"
  | "NewJobUnlocked"
  | "PriorThefts"
  /* Story Elements */
  | "BetrayalMostFoul"
  | "DirtyEvenForUs"
  | "NotableQuotes"
  | "RecurringMaguffin"
  | "RomanticMoments"
  | "SomeoneIsAngry"
  | "TheGrifter"
  | "WrathOfThe"
  | "Outmanuvered"
  | "TastefulCutAway"
  /* Hardison Moments */
  | "OhHellNo"
  | "AgeOfThe"
  | "AlecTheHacker"
  | "ThrowHardissonFromTheX"
  /* Nate Moments */
  | "TheMastermind"
  | "NateTheDrunk"
  | "NateDoesntLikeHospitals"
  /* Elliot Moments" */
  | "ElliotTheChef"
  | "ElliotTheHitter"
  | "ItsAVeryDistinctive"
  /* Sophie Moments */
  | "SophieTheActress"
  | "SophieTheActingCoach"
  /* Parker Moments */
  | "ParkerIsCrazy"
  | "ParkerTheThief"
  /* References to the String */
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
