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
  const [filters, setFilters] = React.useState<Set<string>>(new Set());

  const exposedState = React.useMemo(() => {
    return {
      eventFilters: filters,
      events: events,
      updateEventFilters: (filter: string) => {
        setFilters((prev) => {
          const newFilters = new Set(prev);
          if (newFilters.has(filter)) {
            newFilters.delete(filter);
          } else {
            newFilters.add(filter);
          }
          return newFilters;
        });
      },
    };
  }, [filters, setFilters]);

  return (
    <EventsContext.Provider value={exposedState}>
      {children}
    </EventsContext.Provider>
  );
};
