import React from "react";
import styled, { keyframes } from "styled-components";

interface ILoader {
  delay?: string;
}
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem;
`;
const Dot = styled.div<ILoader>`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.52s linear infinite;
  animation-delay: ${props => props.delay};
`;
export const Loader: React.FC<ILoader> = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};
