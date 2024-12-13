import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const CoverPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const H1Left = styled.h1`
  animation: ${slideInLeft} 1s ease-in-out;
`;

const H1Right = styled.h1`
  animation: ${slideInRight} 1s ease-in-out;
`;

export const CoverPage = () => {
  return (
    <CoverPageWrapper id="cover">
      <H1Left className="slide-in-left">The Caper</H1Left>
      <H1Right className="slide-in-right">Collection</H1Right>
    </CoverPageWrapper>
  );
};
