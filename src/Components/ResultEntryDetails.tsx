import React from "react";
import styled from "styled-components";

interface ContainerProps
{
  visible : boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  background-color: white;
  width: 100vw;
  height: 100vh;
  left: 100vw;
  z-index: 2;

  animation-name: slideLeft;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-play-state: ${props => props.visible ? "running" : "paused"};
  animation-fill-mode: forwards;

  @keyframes slideLeft {
    from {
      left: 100vw;
    }
    to {
      left: 0;
    }
  }
`;

interface ResultEntryDetailsProps
{
  visible : boolean;
  videoID : string;
}

export default function ResultEntryDetails(props : ResultEntryDetailsProps) : JSX.Element
{
  const {visible} = props;

  return (
    <Container visible={visible}>
      <div><span>&lt;</span><h2></h2></div>
    </Container>
  );
}