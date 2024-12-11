import { EpisodesType } from "./types";

export const episodes: EpisodesType = [
  {
    episode: 101,
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
        name: "",
        occupation: "CEO of Pierson Aviation",
      },
    ],
    motive: ["Corporate Greed"],
    exposedTo: ["FBI", "Company"],
  },
  {
    episode: 102,
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
    episode: 103,
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
    episode: 104,
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
