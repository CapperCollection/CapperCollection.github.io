import styled from "styled-components";
import { useEpisodes } from "../../context/episodes";
import { Episode } from "./Episode";

const EpisodesWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  
  display: flex;
  flex-direction row;
  align-items: flex-end;
  justify-content: space-between;
  
  max-width: 100vw;
  overflow: scroll;
  padding: 20px;
`;

export const Episodes = () => {
  const { episodes } = useEpisodes();

  return (
    <EpisodesWrapper id="episodes">
      {episodes.map((episode, index, coll) => (
        <Episode
          key={episode.id}
          episode={episode}
          first={index === 0}
          last={index === coll.length - 1}
        />
      ))}
    </EpisodesWrapper>
  );
};
