import React from "react";
import styled from "styled-components";

const ListWrapper = styled.li`
`;

interface ThumbnailProps
{
  url : string;
}

const Thumbnail = styled.div<ThumbnailProps>`
  background-image: url(${props => props.url});
`;

const Title = styled.h2`
`;

const Channel = styled.span`
`;

const Description = styled.p`
`;

const DetailsButton = styled.button`
  text-transform: uppercase;
`;

interface ResultEntryProps 
{
  thumbnail : string;
  title : string;
  channel : string;
  description : string;
}

export default function ResultEntry(props : ResultEntryProps) : JSX.Element
{
  const {thumbnail, title, channel, description} = props;

  return (
    <ListWrapper>
      <Thumbnail url={thumbnail} />
      <Title>{title}</Title>
      <Channel>{channel}</Channel>
      <Description>{description}</Description>
      <DetailsButton>Detalhes do Vídeo</DetailsButton>
    </ListWrapper>
  );  
}