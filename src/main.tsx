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
