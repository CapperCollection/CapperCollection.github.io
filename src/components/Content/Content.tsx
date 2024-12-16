import styled from "styled-components";
import { Episodes } from "../Episodes";

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  position: relative;
`;

export const Content = () => {
  return (
    <ContentWrapper id="content">
      <Episodes />
    </ContentWrapper>
  );
};
