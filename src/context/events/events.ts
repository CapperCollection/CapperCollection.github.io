import { EventsTypes } from "./types";

export const events: EventsTypes = [
  // Episode 101 - The Nigerian Job
  {
    type: "CharacterIntroduction",
    character: "Nate Ford",
    context: "A former insurance investigator.",
    episode: 101,
    subject: "Ex-insurance investigator",
    timestamp: "00:10",
  },
  {
    type: "CharacterIntroduction",
    character: "Victor Dubenich",
    context: "The CEO of Bering Aerospace.",
    episode: 101,
    subject: "CEO",
    timestamp: "00:25",
  },
  {
    type: "CharacterIntroduction",
    character: "Alec Hardison",
    context: "Rooftop",
    episode: 101,
    subject: "Hacker",
    timestamp: "04:02",
  },
  {
    type: "RecurringMaguffin",
    character: "Alec Hardison",
    context: "Pierson Aviation Building",
    text: [
      "Bone-conduction ear piece mike. Works off the movement of your jaw.",
    ],
    episode: 101,
    subject: "",
    timestamp: "04:10",
  },
  {
    episode: 101,
    type: "OhHellNo",
    text: [
      "No... no no no no... Hell Nah! This equiptment is total VH1 Bro. Its best of the 80's!",
    ],
    context: "Pierson Aviation Building",
    timestamp: "04:05",
    character: "Hardison",
    subject: "Ear piece",
  },

  {
    episode: 101,
    character: "Alec Hardison",
    context:
      "NYC 5 years ago - Hardison and several women dressed as Princess Leia",
    text: ["Does that look like Mick Jager to you?"],
    subject: "",
    timestamp: "04:16",
    type: "Flashback",
  },
  {
    type: "CharacterIntroduction",
    character: "Elliot Spencer",
    context: "Pierson Aviation Building",
    episode: 101,
    subject: "Retrieval Specialist",
    timestamp: "04:50",
  },
  {
    episode: 101,
    character: "Elilot Spencer",
    context:
      "Elliot clears a room full of men with guns to retrieve a baseball card...",
    subject:
      "Belgrade Serbia 3 years ago. I'm here to collect the merchandise?",
    timestamp: "04:40",
    type: "Flashback",
  },
  {
    type: "AgeOfThe",
    character: "Elliot Spencer",
    context: "Pierson Aviation Building",
    text: ["Age of the geed baby, we run the world."],
    episode: 101,
    subject: "Geek",
    timestamp: "05:33",
  },
  {
    type: "CharacterIntroduction",
    character: "Parker",
    context: "Pierson Aviation Building",
    episode: 101,
    subject: "Thief.",
    timestamp: "05:45",
  },
  {
    episode: 101,
    character: "Parker",
    context: "House explodes and a child skips away with a stuffed rabbit",
    subject: "Parker",
    text: [
      "You don't get bunny until you do what I say. So be a good girl. Or I don't know... a better thief.",
    ],
    timestamp: "05:50",
    type: "Flashback",
  },
  {
    episode: 101,
    character: "Parker",
    context: "Pierson Aviation Building",
    text: [
      "Last time I used this rig? Paris 2003",
      "Are you talking about the Caravaggio? You stole that?",
    ],
    subject: "Parker",
    timestamp: "06:27",
    type: "PriorThefts",
  },
  {
    type: "SomeoneIsAngry",
    character: "Eliot Spencer",
    context: "Pierson Aviation Building",
    text: [
      "Is this thing safe?",
      "Yeah its completely safe... its just... You know if you experience nausea... weakness in your right side... stroke... strokiness...",
      "You're precisely why I work alone.",
    ],
    episode: 101,
    subject: "Alec Hardison",
    timestamp: "07:00",
  },
  {
    type: "ParkerIsCrazy",
    character: "Parker",
    context: "Pierson Aviation Building",
    text: [
      "Parker no freelancing.",
      "Relax we know what we're doing.",
      "And on the count of five-",
      "Ah he don't want to be our pal.",
      "And on the count of five, four, three...",
      "She's gone!",
      "Son of a...",
      "Yeehaw!",
      "That's 20 pounds of crazy in a 5 pound bag.",
    ],
    episode: 101,
    subject: "",
    timestamp: "06:58",
  },
  {
    type: "TheMastermind",
    character: "Parker",
    context: "Pierson Aviation Building",
    text: ["Count the haircuts... I would have missed that."],
    episode: 101,
    subject: "Nate Ford",
    timestamp: "09:23",
  },
  {
    type: "ElliotTheHitter",
    character: "Eliot Spencer",
    context: "Pierson Aviation Building",
    text: ["I want you to clear the zone, and use Hardison as bait."],
    episode: 101,
    subject: "That's what I do.",
    timestamp: "11:14",
  },
  {
    type: "AlecTheHacker",
    character: "Alec Hardison",
    context: "Pierson Aviation Building",
    text: [
      "Did you give them a virus?",
      "Dude I gave them more than one virus.",
    ],
    episode: 101,
    subject: "",
    timestamp: "12:18",
  },
  {
    type: "TheMastermind",
    character: "Nate Ford",
    context: "Pierson Aviation Building",
    text: ["I'm the one with a plan."],
    episode: 101,
    subject: "Leverage Inc.",
    timestamp: "12:55",
  },
  {
    type: "ConName",
    character: "Nate Ford",
    subject: "The Burn Scam",
    context: "Pierson Aviation Building",
    episode: 101,
    timestamp: "13:20",
  },
  {
    type: "AlternatePlans",
    character: "Nate Ford",
    context: "Pierson Aviation Building",
    text: ["Technically that would be plan G. Hardison dies in plan M."],
    episode: 101,
    subject: "The Burn Scam",
    timestamp: "13:20",
  },
  {
    episode: 101,
    type: "ParkerIsCrazy",
    context: "Bering Aviation warehouse",
    text: [
      "My money is not in my acccount. That makes me cry inside, in my special angry place.",
    ],
    timestamp: "17:15",
    character: "Parker",
    subject: "Dubenich",
  },
  {
    episode: 101,
    type: "OhHellNo",
    context: "Bering Aviation warehouse",
    text: [
      "Did you come here to get paid?",
      "Hell No, transfer of funds man. Global Economy.",
    ],
    timestamp: "17:25",
    character: "Hardison",
    subject: "Dubenich",
  },
  {
    type: "BetrayalMostFoul",
    character: "Victor Dubenich",
    context: "Bering Aviation warehouse",
    text: [
      "The only way to is to get us all in the same place at the same time is to tell us that we're not getting paid.",
    ],
    episode: 101,
    subject: "Leverage Inc.",
    timestamp: "14:00",
  },
  {
    episode: 101,
    type: "NateDoesntLikeHospitals",
    context: "Hospital",
    text: ["You don't like hospitals.", "Not much."],
    timestamp: "18:33",
    character: "Elliot Spencer",
    subject: "Nate Ford",
  },
  {
    episode: 101,
    type: "NotableQuotes",
    context: "Hospital",
    timestamp: "19:40",
    character: "Nate Ford",
    subject: "",
    text: [
      "Look guys here's your problem. You all know what you can do. I know what all you can do. That gives me the edge, that gives me the plan.",
    ],
  },
  {
    episode: 101,
    type: "TheGrifter",
    context: "Hospital",
    timestamp: "21:11",
    character: "Elliot Spencer",
    subject: "Detective Lieutenant Carden with the Illinoi State Police",
  },
  {
    episode: 101,
    type: "TheGrifter",
    context: "Hospital",
    timestamp: "21:30",
    character: "Nate Ford",
    subject: "Deputy Director McCumber of the FBI",
  },
  {
    type: "ParkerIsCrazy",
    character: "Eliot Spencer",
    context: "Hardison's place",
    text: ["I take that personally", "There is something wrong with you."],
    episode: 101,
    subject: "Parker",
    timestamp: "23:02",
  },
  {
    type: "WrathOfThe",
    character: "Nate Ford",
    context: "Hardison's place",
    text: ["What's in it for you?", "He used my son..."],
    episode: 101,
    subject: "Victor Dubenich",
    timestamp: "25:05",
  },
  {
    type: "SophieTheActress",
    character: "Sophie Devereaux",
    context: "Lady Macbeth - Macbeth",
    episode: 101,
    subject: "Macbeth",
    timestamp: "25:37",
  },
  {
    type: "CharacterIntroduction",
    episode: 101,
    subject: "Griffter",
    context: "Theater - Macbeth",
    character: "Sophie Devereaux",
    timestamp: "05:45",
  },
  {
    episode: 101,
    context:
      "Paris 7 years ago - Nate bursts into a room and is shot by Sohpie. He immediately returns fire.",
    text: ["Freeze!", "You Wanker!"],
    timestamp: "05:50",
    character: "Sophie Devereaux",
    subject: "Nate Ford",
    type: "Flashback",
  },
  {
    episode: 101,
    type: "LetsGoStealA",
    context: "",
    text: [
      "I'm thinking Nigerians. Nigerians will do nicely.",
      "Well he hasn't changed a bit.",
    ],
    timestamp: "29:26",
    character: "Nate Form",
    subject: "Victor Dubenich",
  },
  {
    episode: 101,
    type: "TheGrifter",
    text: [
      "African Commercial Transport and Trade Initiative",
      "You government?",
      "No private business consortium.",
    ],
    context: "Bering Aerospace office",
    timestamp: "29:40",
    character: "Sophie Devereaux",
    subject: "Anna Gunschtot",
  },
  {
    episode: 101,
    type: "SophieTheActress",
    context: "",
    text: [
      "She's not awful.",
      "This is her stage. Sophie Devereaux is the finest actress you've ever seen... when she's breaking the law.",
    ],
    timestamp: "30:32",
    character: "Sophie Devereaux",
    subject: "Anna Gunstott",
  },
  {
    episode: 101,
    timestamp: "37:07",
    type: "Flashback",
    context: "Nate at the bedside of his dying son",
    subject: "",
    text: ["How do they justify that?", "They claimed it was experimental."],
    character: "Nathan Ford",
  },
  {
    episode: 101,
    timestamp: "37:07",
    type: "RomanticMoments",
    context: "Hardison's place",
    text: ["This time you really are in my head."],
    subject: "Nathan Ford",
    character: "Sophie Devereaux",
  },
  {
    type: "ParkerIsCrazy",
    character: "Parker",
    context: "Bering Aviation alternate office",
    text: ["What's it for?", "Speed."],
    episode: 101,
    subject: "Sophie Devereaux",
    timestamp: "39:45",
  },
  {
    type: "ParkerIsCrazy",
    character: "Sophie Devereaux",
    context: "",
    text: [
      "What is it with women and shoes?",
      "There is something wrong with you.",
    ],
    episode: 101,
    subject: "Parker",
    timestamp: "52:48",
  },
  {
    type: "AgeOfThe",
    character: "Alec Hardison",
    context: "",
    text: [
      "There was an overlap in the London Stock market. Valuation carried over to Nasdaq... I'm just very good at what I do...",
      "This is the score... THE SCORE.",
      "Age of the geek baby.",
      "Someone kiss him so I don't have to.",
    ],
    episode: 101,
    subject: "Leverage Inc.",
    timestamp: "05:33",
  },
  {
    type: "NewJobUnlocked",
    timestamp: "55:25",
    episode: 101,
    context: "Black King. White Knight",
    character: "Nate Ford",
    subject: "Mastermind",
  },
  {
    type: "TitleDrop",
    context: "We provide leverage",
    episode: 101,
    character: "Nate Ford",
    subject: "Leverage",
    timestamp: "56:00",
  },
  {
    type: "SophieTheActress",
    character: "Sophie Devereaux",
    context: "",
    text: [
      "Yeah, you understand this is a soap commercial right?",
      "Uh huh, when I thought about Peggy I came up with this idea that the dirt was really this giant metaphor for sin.",
    ],
    episode: 102,
    subject: "Soap Commercial",
    timestamp: "03:33",
  },
  // Episode 102 - The Homecoming Job
  {
    type: "RecurringMaguffin",
    character: "Alec Hardison",
    subject: "Leverage Consulting Assoc",
    context: "Founded in 1913 by the great Harlan Leverage III",
    episode: 102,
    timestamp: "05:51",
  },
  {
    type: "AlecTheHacker",
    character: "Alec Hardison",
    context: "",
    text: [
      "Photo and video forensics, backdoors into every bank in the world.",
    ],
    episode: 102,
    subject: "Leverage Inc tech wall",
    timestamp: "07:20",
  },
  {
    episode: 102,
    type: "ItsAVeryDistinctive",
    character: "Parker",
    context: "You IDed the weapon from the gun shot sound?",
    subject: "sound",
    timestamp: "00:00",
  },
  {
    type: "ThrowHardissonFromTheX",
    character: "Alec Hardison",
    context: "",
    text: ["When were you going to test it?", "Big Baby..."],
    episode: 102,
    subject: "Throwing Hardison from a roof",
    timestamp: "10:27",
  },
  {
    type: "DirtyEvenForUs",
    character: "Sophie Devereaux",
    context: "",
    text: [
      "In these uncertain times buying a congressman is one of the best investments a corporation can make.",
    ],
    episode: 102,
    subject: "Charles Dufort",
    timestamp: "12:14",
  },
  {
    episode: 102,
    type: "ItsAVeryDistinctive",
    character: "Alec Hardison",
    context: "You idenditified a guy off his knife fighting style?",
    subject: "style",
    timestamp: "19:27",
  },
  {
    episode: 102,
    type: "TheMastermind",
    character: "Sophie",
    context: "This (glass of Scotch) is for later",
    subject: "May I put that away from you? (Takes away bottle)",
    timestamp: "21:10",
  },
  {
    episode: 102,
    type: "LetsGoStealA",
    context: "",
    text: ["Oh but steal a law... She's going to be a legend baby..."],
    timestamp: "29:26",
    character: "Alec Hardison",
    subject: "Parker",
  },
  {
    episode: 102,
    type: "RomanticMoments",
    context: "",
    text: ["Go ahead girl, sexiness!"],
    timestamp: "25:40",
    character: "Alec Hardison",
    subject: "Parker",
  },
  {
    episode: 102, // TODO. WHEN does this happen?
    type: "WrathOfThe",
    context: "",
    text: ["I'm going to kill him."],
    timestamp: "00:00",
    character: "Eliot Spencer",
    subject: "Hardison",
  },
  {
    episode: 102,
    type: "TheGrifter",
    context: "Dinner Party",
    timestamp: "10:50",
    character: "Sophie Devereaux",
    subject: "Lilly McCredy of Executive Orders",
  },
  {
    episode: 102,
    type: "TheGrifter",
    context: "Dinner Party",
    timestamp: "22:10",
    character: "Nate Ford",
    subject:
      "Tom Abrams, you can call me Tommy I work with congressman Calloway",
  },
  {
    episode: 102,
    type: "NotableQuotes",
    context: "",
    text: [
      "I'm sorry its too far away for you to punch. I'm sure that really frustrates you.",
    ],
    timestamp: "28:30",
    character: "Hardison",
    subject: "Disabling the webcam",
  },
  {
    episode: 102,
    type: "ParkerIsCrazy",
    context: "",
    text: [
      "What is it you have going on? you and Hardison? like a creepy contest?",
    ],
    timestamp: "30:12",
    character: "Eliot Spencer",
    subject: "It's real... It feels real...",
  },
  {
    episode: 102,
    type: "ParkerIsCrazy",
    context: "",
    text: [
      "They changed the locks.",
      "Just do what you do? [Pulls out bomb]. Oh hell no.",
    ],
    timestamp: "33:55",
    character: "Hardison",
    subject: "Bomb",
  },
  {
    episode: 102,
    type: "OhHellNo",
    context: "[Parker reveals explosive]. Oh hell no.",
    timestamp: "33:55",
    character: "Hardison",
    subject: "Bomb",
  },
  {
    episode: 102,
    type: "NotableQuotes",
    context: "",
    text: ["Anyone who wants to walk away may do so right now.", "One More"],
    timestamp: "28:30",
    character: "Nate Ford",
    subject: "",
  },
  {
    episode: 102,
    type: "TheGrifter",
    context: "Dinner Party",
    timestamp: "10:50",
    character: "Sophie Devereaux",
    subject: "Lilly McCredy of Executive Orders",
  },
  // Episode 103 - The Two-Horse Job

  {
    episode: 103,
    type: "TheGrifter",
    context: "Horse Trainer",
    timestamp: "08:12",
    character: "Elliot Spencer",
    subject: "Brad Macky",
  },
  {
    episode: 103,
    type: "TheGrifter",
    context: "The Poker Game",
    timestamp: "08:00",
    character: "Elliot Spencer",
    subject: "Sheikh Khalid of Dubai",
  },
  {
    episode: 103,
    type: "TheGrifter",
    context: "Horse Owner",
    timestamp: "08:27",
    character: "Nate Ford",
    subject: "Bob Gibson",
  },
  {
    episode: 103,
    type: "TheGrifter",
    context: "",
    timestamp: "06:15",
    character: "Sophie Devereaux",
    subject: "Catherine Beth Lovery",
  },
  {
    episode: 103,
    type: "ParkerIsCrazy",
    context: "I just really don't like horses.",
    timestamp: "03:30",
    character: "Parker",
    subject: "",
    text: ["I once saw a horse kill a clown."],
  },
  {
    episode: 103,
    type: "WrathOfThe",
    context: "",
    timestamp: "04:12",
    character: "Elliot Spencer",
    subject: "",
    text: ["After the fire", "It was a Massacre. A Massacre"],
  },
  {
    timestamp: "11:00",
    character: "Nate Ford",
    episode: 103,
    context: "Horse Racing",
    subject: "",
    text: [
      "I'll tell everyone from Vegas to Houston That Allan Foss welches on his bets.",
    ],
    type: "TheSting",
  },
  {
    episode: 103,
    type: "CharacterIntroduction",
    context: "Race Track parking lot",
    text: ["Why are you playing poker with my client Nate?"],
    timestamp: "11:30",
    character: "James Sterling",
    subject: "IYS Insurance",
  },
  {
    episode: 103,
    type: "PriorThefts",
    context: "Racetrack parking lot",
    text: [
      "I haven't seen you since that little cooup in Sierra Leone. This is getting very interesting.",
    ],
    timestamp: "13:08",
    character: "James Sterling",
    subject: "Sophie Devereaux",
  },

  {
    episode: 103,
    type: "BlastFromThePast",
    context: "Horse Stalls",
    text: [
      "I thought you said you were fine with this. I thought you said you were coming back in three weeks.",
    ],
    timestamp: "15:05",
    character: "Aimee Martin",
    subject: "Elliot Spencer",
  },
  {
    episode: 103,
    type: "Outmanuvered",
    context: "Race Track parking lot",
    text: [
      "I just passed a black van. I can't be sure but I heard screaming inside.",
      "Yeah, and there was blood all on the back of the doors.",
      "Sure, they could have had guns... who knows?",
      "He's like Nate... EVIL NATE!",
    ],
    timestamp: "16:00",
    character: "James Sterling",
    subject: "Alec Hardison & Perker",
  },
  {
    episode: 103,
    type: "Flashback",
    context:
      "Elliot is being interrogated by vaguely East Asian characters off screen",
    timestamp: "19:29",
    character: "Elliot Spencer",
    text: ["Tell us what you did with the monkey! Where is the monkey?"],
    subject: "",
  },
  {
    episode: 103,
    type: "ConName",
    context: "With horses it's all about bloodlines.",
    timestamp: "20:49",
    character: "Nate Ford",
    subject: "The Lost Heir",
  },
  {
    episode: 103,
    type: "LetsGoStealA",
    context:
      "We are going to sell this guy the greatest horse that ever lived...",
    timestamp: "21:20",
    character: "Nate Ford",
    subject: "",
  },
  {
    episode: 103,
    type: "AlecTheHacker",
    context: "",
    text: [
      "A couple years ago all the cell phone companies went digital with their voice mail systems.",
      "Man it was like someone put a brand new swingset on my playground.",
    ],
    timestamp: "23:00",
    character: "Alec Hardison",
    subject: "Kentucky Thunder's trainer",
  },
  {
    episode: 103,
    type: "ParkerIsCrazy",
    context: "Air ducts above horse teasing stall",
    text: [
      "Looks like parker is going to have to crawl through the air duct again.",
      "God forbid anyone else would have to learn how to crawl on their stomach through a tiny space. Its not rocket science people.",
    ],
    timestamp: "31:43",
    character: "Parker",
    subject: "Parker you realize we can still hear you",
  },
  {
    episode: 103,
    type: "TastefulCutAway",
    context: "Horse stall",
    timestamp: "19:45",
    character: "Elliot Spencer",
    subject: "Aimee Martin",
  },
  {
    episode: 103,
    type: "Outmanuvered",
    context: "Race Track restrooms",
    text: ["Did you get some nice pictures?"],
    timestamp: "28:00",
    character: "James Sterling",
    subject: "Leverage Inc.",
  },
  {
    episode: 104,
    type: "SophieTheActress",
    context: "Leverage Inc. Office",
    text: ["Yeah it was like a horror movie! Attention must be Paid!"],
    timestamp: "01:22",
    character: "Parker",
    subject: "Willie Loman - Death of a Salesman",
  },
  {
    episode: 104,
    type: "Flashback",
    context:
      "Elliot has a gun placed to his head by vaguely East Asian characters off screen",
    timestamp: "01:49",
    character: "Elliot Spencer",
    subject:
      "That was the worse night of my life... Come on man you've been in worse situations.",
  },
  {
    episode: 104,
    type: "NateDoesntLikeHospitals",
    context: "Father Paul's hospital room",
    text: ["I know hospitals are tough for you."],
    timestamp: "03:40",
    character: "Father Paul",
    subject: "Nate Ford",
  },
  {
    episode: 104,
    type: "Flashback",
    context: "Child's baptism with Nate and Father Paul",
    timestamp: "05:33",
    character: "Nate Ford",
    subject: "",
  },
  {
    episode: 104,
    type: "ElliotTheHitter",
    text: [
      "This is why I don't like guns. They have a specific range of effocacy. Most guys make one mistake, they get too close.",
    ],
    context: "Meeting gang members under a bridge.",
    timestamp: "06:40",
    character: "Elliot Spencer",
    subject: "",
  },
  {
    episode: 104,
    type: "DirtyEvenForUs",
    text: [
      "Who rolled the priest?",
      "We didn't beat up no priests. We're not monsters.",
    ],
    context: "Meeting gang members under a bridge.",
    timestamp: "07:00",
    character: "Elliot Spencer",
    subject: "",
  },
  {
    episode: 104,
    type: "AlecTheHacker",
    context: "",
    text: [
      "Can you do something with that?",
      "Seven digits? I can find you on Mars",
    ],
    timestamp: "07:50",
    character: "Alec Hardison",
    subject: "",
  },
  {
    episode: 104,
    type: "DirtyEvenForUs",
    text: ["This guy beat up a priest? We're not going easy on him..."],
    context: "Leverage Inc.",
    timestamp: "09:15",
    character: "Nate Ford",
    subject: "Andrew Grant",
  },
  {
    episode: 104,
    type: "TheGrifter",
    context: "",
    timestamp: "09:25",
    character: "Sophie Devereaux",
    subject: "Christy Connely - Reporter with the Ledger",
  },
  {
    episode: 104,
    type: "ParkerIsCrazy",
    context: "The mark is trapped in an elevator...",
    text: [
      "Xanax... its for my nervers",
      "* Elsewhere *",
      "Actually caffeine. With a dash of dextroamphetamine.",
      "You gave him speed?",
    ],
    timestamp: "12:00",
    character: "Nate Ford",
    subject: "Andrew Grant",
  },
  {
    episode: 104,
    type: "LetsGoStealA",
    context: "",
    text: [
      "We're going to need a miracle to save this church...",
      "So, let's go steal ourselves a miracle.",
    ],
    timestamp: "",
    character: "Nate Ford",
    subject: "Miracle",
  },
  {
    episode: 104,
    type: "NewJobUnlocked",
    text: [
      "I went to school with father Paul. To seminary school.",
      "So you dropped out of priest school to become an insurance cop? And now you're here, the leader of a band of thieves? Nice",
    ],
    context: "Leverage Inc.",
    timestamp: "16:40",
    character: "Nate Ford",
    subject: "",
  },
  {
    episode: 104,
    type: "OhHellNo",
    context: "Leverage Inc",
    text: [
      "We just need you to figure out how to fake a miracle",
      "We all going to hell...",
    ],
    timestamp: "17:50",
    character: "Nate Ford",
    subject: "Miracles",
  },
  {
    episode: 104,
    type: "RomanticMoments",
    context: "",
    text: ["You never cheated... that's what made it fun.", "What about now?"],
    timestamp: "",
    character: "Sophie Devereaux",
    subject: "",
  },
  {
    episode: 104,
    type: "NotableQuotes",
    context: "She's from New Zealand...",
    text: ["Are you even British?"],
    timestamp: "40:10",
    character: "Andrew Grant",
    subject: "Sophie Devereaux",
  },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
  // {
  //   episode: 104,
  //   type: "",
  //   context: "",
  //   timestamp: "",
  //   character: "Nate Ford",
  //   subject: "",
  // },
];
