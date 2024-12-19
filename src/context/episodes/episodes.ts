import { EpisodesType } from "./types";

export const episodes: EpisodesType = [
  {
    id: 0,
    episode: 101,
    description:
      "Following the theft of corporate IP, an insurance investigator is tasked with recovering the stolen data with the help of a team of thieves.",
    turn: "The Nigerians were not paying a bribe. Dubenich paid them a bribe from within his own offices.",
    link: "https://youtu.be/YM6-fBB7yQY?si=CC9A1LwVBTDNguaL",
    title: "The Nigerian Job",
    date: "December 7, 2008	",
    locations: ["Chicago"],
    antagonist: [
      {
        name: "Victor Dubenich",
        occupation: "CEO of Bering Aviation",
      },
    ],
    victims: [
      {
        name: "Steve Pierson",
        occupation: "CEO of Pierson Aviation",
      },
    ],
    motive: ["Corporate Greed"],
    exposedTo: ["FBI", "Company"],
  },
  {
    id: 1,
    episode: 102,
    description:
      "A wounded army corporal charges Leverage Inc with the task of exposing corrupt military contractors.",
    turn: "The exploded shipping container was a decoy used to bring the real criminals to the cash together.",
    link: "https://youtu.be/LMX2-vsoGSo?si=hGMJX_wMZWmZ7Ga9",
    title: "The Homecoming Job",
    date: "December 9, 2008",
    locations: ["Los Angeles"],
    antagonist: [
      {
        name: "Charles Dufort",
        occupation: "CEO of Castleman Security",
      },
      {
        name: "Congressman Robert Jenkins",
        occupation: "congressman",
      },
    ],
    victims: [
      {
        name: "Robert Perry",
        occupation: "Retired Army Corporal",
      },
    ],
    motive: [
      "Cash Theft",
      "Corporate Greed",
      "Money Laundering",
      "Political Greed",
    ],
    exposedTo: ["Media"],
  },
  {
    id: 2,
    episode: 103,
    description:
      "The owner of a restaurant was forced to take the fall for a murder committed by local mob-boss.",
    turn: "When Moscone seeks to change access to his accounts, the call is intercepted by Hardison and all assets are drained.",
    link: "https://youtu.be/V2sH3XGiUns?si=ars5K4Z3MJn5rHUQ",
    title: "The Wedding Job",
    date: "December 30, 2008",
    locations: ["Boston"],
    antagonist: [
      {
        name: "Nicky Moscone",
        occupation: "Mob boss",
      },
      {
        name: "Heather Moscone",
        occupation: "Mobster's wife",
      },
    ],
    victims: [
      {
        name: "Ray Palermo",
        occupation: "Restaurant Owner",
      },
    ],
    motive: ["Blame Shift", "Mobster Greed"],
    exposedTo: ["FBI", "Colleagues"],
  },
  {
    id: 5,
    episode: 106,
    description:
      "After a paddock is set a blaze, the team is dispatched to expose the culprit and make things right.",
    turn: "The house the antagonist was trying to buy was a decoy to get him to confess to commit insurance fraud.",
    link: "https://youtu.be/tFhJ8tGK1Kc?si=3OUsqFFrs5QuH6Fx",
    title: "The Two-Horse Job",
    date: "December 16, 2008",
    locations: ["Louisville"],
    antagonist: [
      {
        name: "Alan Foss",
        occupation: "CEO of InterNational Mining",
      },
    ],
    victims: [
      {
        name: "Aimee Martin",
        occupation: "Horse Trainer",
      },
      {
        name: "Willie Martin",
        occupation: "Horse Trainer",
      },
    ],
    motive: ["Insurance Fraud"],
    exposedTo: ["Insurance", "Colleagues"],
  },
  {
    id: 6,
    episode: 107,
    description:
      "A friend of Nate is attacked on the street and the team is tasked with exposing the corrupt real-estate deal that led to the attack.",
    turn: "By doing the right thing Father Paul implicated Grant as responsible for the fake miracle.",
    link: "https://youtu.be/ivomuNvW5A8?si=fTJ4r74ycQujat1v",
    title: "The Miracle Job",
    date: "December 23, 2008",
    locations: ["Los Angeles"],
    antagonist: [
      {
        name: "Andrew Grant",
        occupation: "Real Estate Developer",
      },
    ],
    victims: [
      {
        name: "Father Paul",
        occupation: "Priest",
      },
    ],
    motive: ["Corporate Greed"],
    exposedTo: ["Media", "Police"],
  },
];
