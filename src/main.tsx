import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { EventsProvider, EpisodesProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <EpisodesProvider>
    <EventsProvider>
      <App />
    </EventsProvider>
  </EpisodesProvider>
);
