import React from "react";
import { EventsContextType, EventsProviderProps } from "./types";

import { events } from "./events";

const EventsContext = React.createContext<EventsContextType | undefined>(
  undefined
);

export const useEvents = () => {
  const context = React.useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within a EventsProvider");
  }
  return context;
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const exposedState = { events: events };

  return (
    <EventsContext.Provider value={exposedState}>
      {children}
    </EventsContext.Provider>
  );
};
