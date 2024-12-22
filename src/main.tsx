import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { EventsProvider, EpisodesProvider } from "src/context";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <EpisodesProvider>
    <EventsProvider>
      <App />
    </EventsProvider>
  </EpisodesProvider>
);

/* 
Notes: Scam names: 
https://www.tumblr.com/glen-reeder/149387327864/leverage-con-names
https://en.wikipedia.org/wiki/List_of_scams#Rip_deal
*/
