type EventTypeType =
  | "TitleDrop"
  | "AlternatePlans"
  | "LetsGoStealA"
  /* Character Development */
  | "CharacterIntroduction"
  | "Flashback"
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
  /* Hardison Moments */
  | "OhHellNo"
  | "AgeOfThe"
  | "AlecTheHacker"
  /* Nate Moments */
  | "NateTheMasterMind"
  | "NateTheDrunk"
  /* Elliot Moments" */
  | "ElliotTheChef"
  | "ElliotTheHitter"
  | "ItsAVeryDistinctive"
  /* Sophie Moments */
  | "SophieTheActress"
  | "SophieTheActingCoach"
  /* Parker Moments */
  | "ParkerIsCrazy"
  | "ParkerTheThief";

type MainCharactersType =
  | "Nate Ford"
  | "Sophie Devereaux"
  | "Parker"
  | "Hardison"
  | "Elliot Spencer";

type EventType = {
  episode: number;
  context: string;
  timestamp: string;
  character: MainCharactersType | string;
  subject: string;
  type: EventTypeType;
};

export type EventsTypes = EventType[];
