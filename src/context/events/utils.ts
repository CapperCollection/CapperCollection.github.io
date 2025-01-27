import type { EventType } from "./types";

export const sortEvents = (eventList: EventType[]) => {
  eventList.sort((episodeA, episodeB) => {
    const [aa, ab] = episodeA.timestamp.split(":");
    const numa = episodeA.eps * 10000 + parseInt(aa) * 60 + parseInt(ab);
    const [ba, bb] = episodeB.timestamp.split(":");
    const numb = episodeB.eps * 10000 + parseInt(ba) * 60 + parseInt(bb);
    return numa > numb ? -1 : 1;
  });
};
