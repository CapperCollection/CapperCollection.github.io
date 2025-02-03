import React from "react";
import styled from "styled-components";
import {
  Checkbox,
  Dropdown,
  DropdownBody,
  DropdownButton,
} from "react-flatifycss";

import { useEvents } from "src/context";

const EVENT_TYPES = [
  { value: "TitleDrop", name: "Title Drop" },
  { value: "AlternatePlans", name: "Alternate Plan Names" },
  { value: "BoomGoesTheDynamite", name: "Boom Goes The Dynamite" },
  { value: "ConName", name: "The Con Name" },
  { value: "LetsGoStealA", name: "Let's Go Steal A ..." },
  /* Character Development */
  { value: "BlastFromThePast", name: "Blast From The Past" },
  { value: "CharacterIntroduction", name: "Character Introduction" },
  { value: "Flashback", name: "Flashback" },
  { value: "NewJobUnlocked", name: "New Job Unlocked" },
  { value: "PriorJobs", name: "Prior Jobs" },
  /* Story Elements */
  { value: "BetrayalMostFoul", name: "Betrayal Most Foul" },
  { value: "DirtyEvenForUs", name: "Dirty Even For Us" },
  { value: "NotableQuotes", name: "Notable Quotes" },
  { value: "Outmaneuvered", name: "Outmaneuvered" },
  { value: "RecurringMaguffin", name: "Recurring Maguffin" },
  { value: "RecurringCharacter", name: "Recurring Character" },
  { value: "RomanticMoments", name: "Romantic Moments" },
  { value: "SomeoneIsAngry", name: "Someone Is Angry" },
  { value: "TastefulCutAway", name: "Tasteful Cut Away" },
  { value: "TheGrifter", name: "The Grifter" },
  { value: "Seriously", name: "Seriously" },
  { value: "SterlingAlwaysWins", name: "Sterling Always Wins" },
  /* Thief Moments */
  { value: "TheLift", name: "The Lift" },
  /* Hardison Moments */
  { value: "AgeOfThe", name: "Age Of The" },
  { value: "AlecTheHacker", name: "Alec The Hacker" },
  { value: "OhHellNo", name: "Oh Hell No" },
  { value: "ThrowHardissonFromTheX", name: "Throw Hardisson From The X" },
  { value: "DamnIt", name: "Damn It" },
  /* Nate Moments */
  { value: "NateDoesntLikeHospitals", name: "Nate Doesn't Like Hospitals" },
  { value: "NateTheDrunk", name: "Nate The Drunk" },
  { value: "TheMastermind", name: "The Mastermind" },
  /* Elliot Moments" */
  { value: "ElliotTheChef", name: "Elliot The Chef" },
  { value: "ElliotTheHitter", name: "Elliot The Hitter" },
  { value: "IDontLikeGuns", name: "I Don't Like Guns" },
  { value: "ItsAVeryDistinctive", name: "It's A Very Distinctive" },
  /* Sophie Moments */
  { value: "SophieTheActingCoach", name: "Sophie The Acting Coach" },
  { value: "SophieTheActress", name: "Sophie The Actress" },
  { value: "MotiveInsight", name: "Motive Insight" },
  /* Parker Moments */
  { value: "ComeFlyWithMe", name: "Come Fly With Me" },
  { value: "ParkerIsCrazy", name: "Parker Is Crazy" },
  { value: "ParkerTheThief", name: "Parker The Thief" },
  /* References to Pop Culture */
  { value: "TheSting", name: "The Sting" },
  {
    value: "SomethingCompleteDifferent",
    name: "Something Completely Different",
  },
];

const DropdownWrapper = styled(Dropdown)`
  position: sticky;
  top: 0;

  display: inline-block;
  z-index: 1;
`;

export const EventList = () => {
  const { updateEventFilters } = useEvents();
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateEventFilters(event.target.value);
  };

  return (
    <DropdownWrapper id="type-dropdown" autoClose>
      <DropdownButton hasArrow>Event Types</DropdownButton>
      <DropdownBody sx="max-height: 75vh; overflow: scroll;">
        {EVENT_TYPES.map(({ value, name }) => (
          <Checkbox
            key={value}
            value={value}
            onChange={onClick}
            sx="padding: 0.5rem;"
          >
            {name}
          </Checkbox>
        ))}
      </DropdownBody>
    </DropdownWrapper>
  );
};
