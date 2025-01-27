import classNames from "classnames";
import { Element, Quote } from "react-flatifycss";
import { Colors } from "react-flatifycss/dist/interfaces";

import { EventType, useEvents } from "src/context";

const AvailableThemes: Colors[] = [
  "blue",
  "blue-light",
  "green",
  "green-light",
  "yellow",
  "yellow-light",
  "orange",
  "orange-light",
  "red",
  "red-light",
  "pink",
  "pink-light",
  "purple",
  "purple-light",
  "accent",
  "accent-light",
  "success",
  "success-light",
  "info",
  "info-light",
  "warning",
  "warning-light",
  "danger",
  "danger-light",
  "light",
  "light-light",
  "dark",
  "dark-light",
];

interface EventInterface {
  event: EventType;
  index: number;
}

export const Event = ({ event, index }: EventInterface) => {
  const { eventFilters } = useEvents();
  const {
    eps: episode,
    context,
    timestamp,
    character,
    subject,
    text,
    type,
  } = event;
  const hideEvent = eventFilters.size > 0 && !eventFilters.has(type);

  return (
    <Element
      roundness="round-lg"
      theme={AvailableThemes[index % AvailableThemes.length]}
      id={`event-${episode}-${index}`}
      className={classNames(`event episode-${event.eps}`, {
        hide: hideEvent,
      })}
      sx="
  width: 100%;
  height: fit-content;
  transform: scale(1);
  margin-bottom: 1rem;
  padding: 1rem;
  transition: height 0.5s, padding 0.5s, margin 0.5s, transform 0.5s;

  &.hide {
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  &:hover {
    transform: scale(1.05);
  }
"
    >
      <Element>
        <h4>
          {type} - {episode} - {timestamp}
        </h4>
        {Boolean(text?.length) && (
          <Quote size="sm" hasIcon>
            {text?.map((line) => (
              <div key={line.replaceAll(" ", "-")}>{line}</div>
            ))}
          </Quote>
        )}
      </Element>
      <div className="card-footer">
        {character && <h6>Character: {character}</h6>}
        {subject && <h6>Subject: {subject}</h6>}
        {context && <h6>Context: {context}</h6>}
      </div>
    </Element>
  );
};
