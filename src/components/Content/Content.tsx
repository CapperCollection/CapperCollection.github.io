import styled from "styled-components";
import { Episodes } from "../Episodes";
import { Events } from "../Events";
import { EventList } from "../EventList";

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Content = () => {
  return (
    <ContentWrapper id="content">
      <EventList />
      <Events />
      <Episodes />
    </ContentWrapper>
  );
};
