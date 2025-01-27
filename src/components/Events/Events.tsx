import styled from "styled-components";

import { useEvents } from "src/context";

import { Event } from "./Event";
import { useObserver } from "src/context/observer";

const EventWrapper = styled("div")`
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;

  max-width: 100vw;
  min-width: 100vw;
  padding: 3rem;
`;

export const Events = () => {
  const { events } = useEvents();

  useObserver();

  return (
    <EventWrapper id="events">
      {events.map((event, index) => (
        <Event
          key={`event-${event.eps}-${index}`}
          index={index}
          event={event}
        />
      ))}
    </EventWrapper>
  );
};
