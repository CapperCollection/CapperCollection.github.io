import {
  Checkbox,
  Dropdown,
  DropdownBody,
  DropdownButton,
} from "react-flatifycss";
import { useEvents } from "../../context";

const EVENT_TYPES = [
  { value: "TitleDrop", name: "Title Drop" },
  { value: "AlternatePlans", name: "Alternate Plan Names" },
  { value: "LetsGoStealA", name: "Let's go steal a..." },
  { value: "ConName", name: "Con Names" },
  /* Character Development */
  { value: "CharacterIntroduction", name: "Recurring character introduction" },
  { value: "Flashback", name: "Flashbacks" },
  { value: "BlastFromThePast", name: "Blast from the Past" },
  { value: "NewJobUnlocked", name: "New Jobs" },
  { value: "PriorThefts", name: "Prior Thefts" },
  /* Story Elements */
  { value: "BetrayalMostFoul", name: "Betrayal Most Foul" },
  { value: "DirtyEvenForUs", name: "Dirty, even for us!" },
  { value: "NotableQuotes", name: "Quotables" },
  { value: "RecurringMaguffin", name: "Recurrng Items" },
  { value: "RomanticMoments", name: "Romantic Moments" },
  { value: "SomeoneIsAngry", name: "Someone is Angry" },
  { value: "TheGrifter", name: "The Grifter" },
  { value: "Outmanuvered", name: "Outmanuvered" },
  { value: "TastefulCutAway", name: "Tasteful Cutaway" },
  /* Hardison Moments */
  { value: "OhHellNo", name: "Oh Hell No" },
  { value: "AgeOfThe", name: "Age Of the Geed" },
  { value: "AlecTheHacker", name: "Alec the Hacker" },
  { value: "ThrowHardissonFromTheX", name: "Throw Hardison from the ..." },
  /* Nate Moments */
  { value: "TheMastermind", name: "The Mastermind" },
  { value: "NateTheDrunk", name: "Nate the Drunk" },
  { value: "NateDoesntLikeHospitals", name: "Nate Doesnt Like Hospitals" },
  /* Elliot Moments" */
  { value: "ElliotTheChef", name: "Elliot the Chef" },
  { value: "ElliotTheHitter", name: "Elliot the Hitter" },
  { value: "ItsAVeryDistinctive", name: "Its a very Distinctive ..." },
  /* Sophie Moments */
  { value: "SophieTheActress", name: "Sophie the Actress" },
  { value: "SophieTheActingCoach", name: "Sophie the Acting Coach" },
  /* Parker Moments */
  { value: "ParkerIsCrazy", name: "Parker is Crazy" },
  { value: "ParkerTheThief", name: "Parker the Thief" },
  /* References to the String */
  { value: "TheSting", name: "The Sting" },
];

export const EventList = () => {
  const { updateEventFilters } = useEvents();
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateEventFilters(event.target.value);
  };

  return (
    <Dropdown id="type-dropdown" autoClose>
      <DropdownButton hasArrow>Open Menu</DropdownButton>
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
    </Dropdown>
  );
};
