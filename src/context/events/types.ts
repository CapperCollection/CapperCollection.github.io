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
  | "PriorJobs"
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
  | "Seriously"
  /* Thief Moments */
  | "TheLift"
  /* Hardison Moments */
  | "AgeOfThe"
  | "AlecTheHacker"
  | "OhHellNo"
  | "ThrowHardissonFromTheX"
  | "DamnIt"
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
  | "SophieTheActingCoach" // TODO Add moments where she tells people what things mean.
  | "SophieTheActress"
  | "MotiveInsight"
  /* Parker Moments */
  | "ComeFlyWithMe"
  | "ParkerIsCrazy"
  | "ParkerTheThief"
  /* References to Pop Culture */
  | "TheSting"
  | "SomethingCompleteDifferent";

type MainCharactersType =
  | "Nate Ford"
  | "Sophie Devereaux"
  | "Parker"
  | "Hardison"
  | "Elliot Spencer";

export type EventType = {
  eps: number;
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
