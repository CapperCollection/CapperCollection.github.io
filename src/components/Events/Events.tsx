import styled from "styled-components";
import { useEvents } from "../../context";
import { Event } from "./Event";

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

  return (
    <EventWrapper>
      {events.map((event, index) => (
        <Event
          key={`event-${event.episode}-${index}`}
          index={index}
          event={event}
        />
      ))}
    </EventWrapper>
  );
};
