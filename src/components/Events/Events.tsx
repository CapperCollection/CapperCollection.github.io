import styled from "styled-components";
import { useEvents } from "../../context";
import { Event } from "./Event";

const EventWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100vw;
  overflow: scroll;
  padding: 1.5rem;
  margin-bottom: 130px;
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
