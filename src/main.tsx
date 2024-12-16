import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { EventsProvider, EpisodesProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EpisodesProvider>
      <EventsProvider>
        <App />
      </EventsProvider>
    </EpisodesProvider>
  </StrictMode>
);
