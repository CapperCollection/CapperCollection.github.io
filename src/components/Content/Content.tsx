import styled from "styled-components";
import { EventList, Events, Episodes } from "src/components";

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
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
