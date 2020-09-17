import React from "react";
import styled from "styled-components";
import { videoFrameDimensions } from "../Theming/Globals";

const ListItemWrapper = styled.li`
  width: ${videoFrameDimensions.xs.width};
  margin-bottom: 20px;
  background-color: white;
  height: 354px;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-right: 20px;
  }
`;

interface ThumbnailProps
{
  url : string;
}

const Thumbnail = styled.div<ThumbnailProps>`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${videoFrameDimensions.xs.width};
  height: ${videoFrameDimensions.xs.height};
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
`;

const Channel = styled.h3`
  margin-top: 10px;
  font-size: 12px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
`;

const DetailsButton = styled.button`
  margin-top: 10px;
  text-transform: uppercase;
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
  align-self: flex-start;
`;

const ListItemPadding = styled.div`
  flex-grow: 1;
`;

interface ResultEntryProps 
{
  thumbnail : string;
  title : string;
  channel : string;
  description : string;
  showDetails() : void;
}

export default function VideoEntry(props : ResultEntryProps) : JSX.Element
{
  const {thumbnail, title, channel, description, showDetails} = props;

  return (
    <ListItemWrapper>
      <Thumbnail url={thumbnail} />
      <Title>{title}</Title>
      <Channel>{channel}</Channel>
      <Description>{description}</Description>
      <ListItemPadding />
      <DetailsButton onClick={showDetails}>Detalhes do Vídeo</DetailsButton>
    </ListItemWrapper>
  );  
}