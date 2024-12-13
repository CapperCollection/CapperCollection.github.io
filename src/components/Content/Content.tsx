import styled from "styled-components";

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

export const Content = () => {
  return (
    <ContentWrapper id="content">
      <h1>Episodes</h1>
      <p>Click on an episode to learn more</p>
    </ContentWrapper>
  );
};
