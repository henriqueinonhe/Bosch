import React from "react";
import { Container, Thumbnail, Info, Title, Channel, Description, ListItemPadding, DetailsButton } from "./VideoEntrySubComponents";

interface VideoEntryProps 
{
  thumbnail : string;
  title : string;
  channel : string;
  description : string;
  onShowDetailsTriggered() : void;
}

export default function VideoEntry(props : VideoEntryProps) : JSX.Element
{
  const {thumbnail, title, channel, description, onShowDetailsTriggered} = props;

  return (
    <Container>
      <Thumbnail url={thumbnail} />
      <Info>
        <Title>{title}</Title>
        <Channel>{channel}</Channel>
        <Description>{description}</Description>
        <ListItemPadding />
        <DetailsButton onClick={onShowDetailsTriggered}>Detalhes do Vídeo</DetailsButton>
      </Info>
    </Container>
  );  
}