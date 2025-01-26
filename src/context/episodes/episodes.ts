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
    locations: ["Chicago, IL"],
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
    realLifeEvents: [
      {
        description: "2008 RyanAir expands to Africa",
        link: "",
      },
    ],
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
    locations: ["Los Angeles, CA"],
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
    realLifeEvents: [],
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
    locations: ["Boston, MA"],
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
    realLifeEvents: [],
  },
  {
    id: 3,
    episode: 104,
    description:
      "A national guardsman's home is repossed by an unscrupulous construction firm. As the con goes on a string of similar repossessions is revealed.",
    turn: "The mark is tricked into transferring all his funds offshore, triggering his arrest. The mark's son signs away controll of their company allowing the team to restore all stolen homes.",
    link: "https://youtu.be/7Ubadx5paaI?si=vRM82YKbo1JKQSfj",
    title: "The Snow Job",
    date: "January 27, 2009",
    locations: ["Holgan County, MS", "Miami, FL"],
    antagonist: [
      {
        name: "Henry Retzing",
        occupation: "Contractor - Self-made millionaire",
      },
      {
        name: "Dennis Retzing",
        occupation: "MBA from Duke - This man does the grunt work",
      },
      {
        name: "Randy Retzing",
        occupation: "Snowboarder & Judge of wet-t-shirt contests",
      },
    ],
    victims: [
      {
        name: "Wayne Scott",
        occupation: "National Guardsman",
      },
    ],
    motive: ["Corporate Greed"],
    exposedTo: ["Police"],
    realLifeEvents: [],
  },
  {
    id: 4,
    episode: 105,
    description:
      "Following the death of a young girl the crew is tasked with retrieving daming evidence en route to the Cayman islands.",
    turn: "The company accountant is convinced to testify against GenoGrow Industries following the attempted murder.",
    link: "https://youtu.be/7Ubadx5paaI?si=vRM82YKbo1JKQSfj",
    title: "The Mile High Job",
    date: "January 20, 2009",
    locations: ["Los Angeles, CA", "Cayman Islands"],
    antagonist: [
      {
        name: "Allen Haldeman",
        occupation: "CEO of GenoGrow Industries",
      },
    ],
    victims: [
      {
        name: "Mark Jameson",
        occupation: "Father to Ashley",
      },
      {
        name: "Stacey Jameson",
        occupation: "Mother to Ashley",
      },
    ],
    motive: ["Corporate Greed"],
    exposedTo: ["Court"],
    realLifeEvents: [],
  },
  {
    id: 5,
    episode: 106,
    description:
      "After a paddock is set a blaze, the team is dispatched to expose the culprit and make things right.",
    turn: "The horse the antagonist was trying to buy was a decoy to get him to commit insurance fraud.",
    link: "https://youtu.be/tFhJ8tGK1Kc?si=3OUsqFFrs5QuH6Fx",
    title: "The Two-Horse Job",
    date: "December 16, 2008",
    locations: ["Louisville, KY"],
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
    realLifeEvents: [],
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
    locations: ["Los Angeles, CA"],
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
    realLifeEvents: [],
  },
  {
    id: 7,
    episode: 108,
    description:
      "The team is in the process of exposing a corrupt job when a second job lands on their head.",
    turn: "After Ellen Clark is rescued, and Judge Roy discovers he is being conned, the situation in the bank is reengineered to make Judge Roy look like he has gone crazy.",
    link: "https://youtu.be/BDqWgwcroJo?si=-saawwkMB2mZmmoQ",
    title: "The Bank Shot Job",
    date: "January 13, 2009",
    locations: ["Juan, CA"],
    antagonist: [
      {
        name: "Roy",
        occupation: "Local Judge",
      },
    ],
    victims: [
      {
        name: "Derek Clark",
        occupation: "Retired Navy",
      },
      {
        name: "Ellen Clark",
        occupation: "Housewife",
      },
      {
        name: "Michael Clark",
        occupation: "Drug Dealer / Student",
      },
      {
        name: "Delgado Family",
        occupation: "Family of murdered Beth Delgado",
      },
    ],
    motive: ["Corruption"],
    exposedTo: ["FBI", "Police"],
    realLifeEvents: [],
  },
  {
    id: 8,
    episode: 109,
    description:
      "After an adoption scam is exposed, the team is tasked with recovering the stolen child and subsequently children.",
    turn: "The guns were switched out with props, so the team could get the children out of the orphanage and Nicolas would be in hot water with his clients.",
    link: "https://youtu.be/eykK2GVqb7w?si=8B1AIkJDCk_bDzaN",
    title: "The Stork Job",
    date: "January 6, 2009",
    locations: ["Belgrade, Serbia"],
    antagonist: [
      {
        name: "Irina Larenko",
        occupation: "Former Model",
      },
      {
        name: "Nicolas Obrovic",
        occupation: "Organized Crime",
      },
    ],
    victims: [
      {
        name: "Joe Morton",
        occupation: "Adoptive Parents",
      },
      {
        name: "Dana Morton",
        occupation: "Adoptive Parents",
      },
      {
        name: "Adoptees",
        occupation: "Minors",
      },
    ],
    motive: ["Mobster Greed"],
    exposedTo: ["Colleagues"],
    realLifeEvents: [],
  },
];
