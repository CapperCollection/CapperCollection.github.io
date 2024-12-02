type EventType = {
  episode: number;
  context: string;
  timestamp: string;
  character: string;
  subject: string;
  type:
    | "TitleDrop"
    | "AlternatePlans"
    | "LetsGoStealA"
    // Character Development
    | "CharacterIntroduction"
    | "Flashback"
    | "NewJobUnlocked"
    | "PriorThefts"
    // Story Elements
    | "RecurringMaguffin"
    | "SomeoneIsAngry"
    | "BetrayalMostFoul"
    | "RomanticMoments"
    | "WrathOfThe"
    | "DirtyEvenForUs"
    // Hardison Moments
    | "AgeOfThe"
    | "AlecTheHacker"
    // Nate Moments
    | "NateTheMasterMind"
    | "NateTheDrunk"
    // Elliot Moments"
    | "ElliotTheChef"
    | "ElliotTheHitter"
    | "ItsAVeryDistinctive"
    // Sophie Moments
    | "SophieTheActress"
    | "SophieTheActingCoach"
    // Parker Moments
    | "ParkerIsCrazy"
    | "ParkerTheThief";
};

export type EventsTypes = EventType[];
