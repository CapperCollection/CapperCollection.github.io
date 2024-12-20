import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  ArrowButton,
  Button,
  ButtonGroup,
  Element,
  Highlight,
} from "react-flatifycss";

import styled from "styled-components";
import { EpisodeType, useEpisodes } from "../../context";
import React from "react";
import classNames from "classnames";

const EpisodeWrapper = styled("article")`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  padding: 2px 12px 12px;
  margin: 0.75rem;
  position: relative;
  transition: all 0.3s ease-in-out;

  .card-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  &:hover .card-body {
    max-height: 600px;
  }

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

  &.hide-episode {
    width: 0;
    min-width: 0;
    max-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
`;

interface EpisodeInterface {
  episode: EpisodeType;
  last: boolean;
  first: boolean;
}

export const Episode = ({ episode, last, first }: EpisodeInterface) => {
  const { episodeFilters: filters, updateEpisodeFilters } = useEpisodes();
  const [hide, setHide] = React.useState(true);

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
  const scrollToEpisode = () => {
    document
      .querySelector(`.episode-${episode.episode}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hideEpisode =
    filters.size > 0 && !episode.motive.some((motive) => filters.has(motive));

  return (
    <EpisodeWrapper
      className={classNames("card", { "hide-episode": hideEpisode })}
      id={`episode-${episode.id}`}
    >
      <header className="card-header">
        <h3 className="card-title">{episode.title}</h3>
      </header>

      <Element className="card-body">
        <Accordion animation="fade" bordered collapsible multiple>
          <AccordionItem>
            <AccordionButton hasIcon>Episode Information</AccordionButton>
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
            <AccordionButton hasIcon>Motive</AccordionButton>
            <AccordionPanel>
              {episode.motive.map((motive) => (
                <Button
                  size="xs"
                  theme={filters.has(motive) ? "purple-light" : undefined}
                  key={motive}
                  onClick={() => updateEpisodeFilters(motive)}
                  value={motive}
                >
                  {motive}
                </Button>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton hasIcon>Antagonists</AccordionButton>
            <AccordionPanel>
              {episode.antagonist.map((antagonist, index) => (
                <p key={index}>
                  {antagonist.name} - {antagonist.occupation}
                </p>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton hasIcon>Victims</AccordionButton>
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
            Episode {episode.episode}
          </Button>
          {!last && (
            <Button
              aria-label="Arrow button"
              className="button arrow-button arrow-right"
              onClick={handleNextClick}
            />
          )}
        </ButtonGroup>
        <ArrowButton
          direction="right"
          isButton
          label="Scroll to Episode Events"
          onClick={scrollToEpisode}
        />
      </footer>
    </EpisodeWrapper>
  );
};
