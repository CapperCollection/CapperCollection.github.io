import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  ButtonGroup,
  Element,
  Highlight,
} from "react-flatifycss";

import styled from "styled-components";
import { EpisodeType } from "../../context";
import React from "react";

const EpisodeWrapper = styled("article")`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  padding: 20px;
  margin: 20px;
  position: relative;

  .hide {
    background-color: var(--flatify__card-txt-color);
  }
  .turn {
    cursor: pointer;
    user-select: none;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

interface EpisodeInterface {
  episode: EpisodeType;
  last: boolean;
  first: boolean;
}

export const Episode = ({ episode, last, first }: EpisodeInterface) => {
  const [hide, setHide] = React.useState(true);
  console.log({ episode });

  const scrollToElement = (element: HTMLElement | null) => {
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    const element = document.getElementById(`episode-${episode.id + 1}`);
    if (element) scrollToElement(element);
  };
  const handlePrevClick = () => {
    const element = document.getElementById(`episode-${episode.id - 1}`);
    if (element) scrollToElement(element);
  };

  return (
    <EpisodeWrapper className="card" id={`episode-${episode.id}`}>
      <header className="card-header">
        <h3 className="card-title">
          {episode.episode} {episode.title}
        </h3>
      </header>

      <Element className="card-body">
        <Accordion animation="fade" bordered collapsible multiple>
          <AccordionItem>
            <AccordionButton hasIcon>
              <Highlight theme="success-light">Episode Information</Highlight>
            </AccordionButton>
            <AccordionPanel>
              {episode.date} - {episode.locations}
              <br />
              <Highlight>Description:</Highlight>
              &nbsp;{episode.description}
              <br />
              <Highlight theme="danger-light">Turn:</Highlight>
              &nbsp;
              <span
                className={hide ? "hide turn" : "turn"}
                onClick={() => setHide((prev) => !prev)}
              >
                {episode.turn}
              </span>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton hasIcon>
              <Highlight theme="purple-light">Antagonists</Highlight>
            </AccordionButton>
            <AccordionPanel>
              {episode.antagonist.map((antagonist, index) => (
                <p key={index}>
                  {antagonist.name} - {antagonist.occupation}
                </p>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton hasIcon>
              <Highlight theme="info-light">Victims</Highlight>
            </AccordionButton>
            <AccordionPanel>
              {episode.victims.map((victim, index) => (
                <p key={index}>
                  {victim.name} - {victim.occupation}
                </p>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Element>

      <footer className="card-footer">
        <ButtonGroup>
          {!first && (
            <Button
              aria-label="Arrow button"
              className="button arrow-button arrow-left"
              onClick={handlePrevClick}
            />
          )}
          <Button as="a" href={episode.link} secondaryText="Watch Now!">
            Episode Link
          </Button>
          {!last && (
            <Button
              aria-label="Arrow button"
              className="button arrow-button arrow-right"
              onClick={handleNextClick}
            />
          )}
        </ButtonGroup>
      </footer>
    </EpisodeWrapper>
  );
};
