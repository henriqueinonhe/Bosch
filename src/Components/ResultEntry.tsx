import React from "react";
import styled from "styled-components";

const ListItemWrapper = styled.li`
  width: 280px;
  margin-bottom: 20px;
  background-color: white;
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
  width: 280px;
  height: 157px;
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
`;

interface ResultEntryProps 
{
  thumbnail : string;
  title : string;
  channel : string;
  description : string;
  showDetails() : Promise<void>;
}

export default function ResultEntry(props : ResultEntryProps) : JSX.Element
{
  const {thumbnail, title, channel, description, showDetails} = props;

  return (
    <ListItemWrapper>
      <Thumbnail url={thumbnail} />
      <Title>{title}</Title>
      <Channel>{channel}</Channel>
      <Description>{description}</Description>
      <DetailsButton onClick={showDetails}>Detalhes do Vídeo</DetailsButton>
    </ListItemWrapper>
  );  
}