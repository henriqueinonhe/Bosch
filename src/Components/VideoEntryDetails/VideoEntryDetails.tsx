import React, { useEffect, useRef, useState } from "react";
import { YoutubeVideoDetailsResponseData } from "../../Models/YoutubeVideoDetailsResponseData";
import YoutubeAPIController from "../../Controllers/YoutubeAPIController";
import { Header, NavigateBeforeButton, NavigateBeforeIcon, Video, VideoInfo, ChannelAndRatingsContainer, Ratings, ThumbUpIcon, RatingNumber, ThumbDownIcon, Views, VisibilityIcon, ViewCount, Container, Title, Channel, Description, Wrapper, Divider } from "./VideoEntryDetailsSubComponents";

interface ResultEntryDetailsProps
{
  isVisible : boolean;
  videoId : string;
  onHideEntryDetailsTriggered() : void;
}

export default function VideoEntryDetails(props : ResultEntryDetailsProps) : JSX.Element
{
  const {isVisible, videoId, onHideEntryDetailsTriggered} = props;

  const [displayingInfo, setDisplayingInfo] = useState<boolean>(false);
  const [videoDetails, setVideoDetails] = useState<YoutubeVideoDetailsResponseData>();
  const containerRef = useRef<HTMLDivElement>(null);

  const title = videoDetails?.items[0]?.snippet.title || "";
  const channel = videoDetails?.items[0]?.snippet.channelTitle || "";
  const description = videoDetails?.items[0]?.snippet.description || "";
  const likes = videoDetails?.items[0]?.statistics.likeCount || "";
  const dislikes = videoDetails?.items[0]?.statistics.dislikeCount || "";
  const views = videoDetails?.items[0]?.statistics.viewCount || "";
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  /**
   * Fetching video details data.
   */
  useEffect(() => 
  {
    (async () => 
    {
      const data = await YoutubeAPIController.details(videoId);
      setVideoDetails(data);
    })();

  }, [videoId]);

  /**
   * Animations.
   */
  useEffect(() => 
  {
    const videoEntryDetailsContainer = containerRef.current!;
    if(isVisible)
    {
      videoEntryDetailsContainer.animate(
        [
          {transform: "translateX(0)"}     
        ],
        {
          duration: 700,
          easing: "ease",
          fill: "forwards"
        }
      );
      setTimeout(() => setDisplayingInfo(true), 750);
    }
    else
    {
      videoEntryDetailsContainer.animate(
        [
          {transform: "translateX(100vw)"}     
        ],
        {
          duration: 700,
          easing: "ease",
          fill: "forwards"
        }
      );
      setTimeout(() => setDisplayingInfo(false), 750);
    }
  }, [isVisible]);

  return (
    <Container ref={containerRef} id="VideoEntryDetailsContainer">
      {
        displayingInfo &&
        <>
          <Header>
            <NavigateBeforeButton  onClick={onHideEntryDetailsTriggered} >
              <NavigateBeforeIcon/>
            </NavigateBeforeButton>
            <Title>{title}</Title>
          </Header>
          <Wrapper>
            {
              videoId !== "" && <Video src={videoURL} />
            }
            <VideoInfo>
              <ChannelAndRatingsContainer>
                <Channel>{channel}</Channel>
                <Ratings>
                  <ThumbUpIcon />
                  <RatingNumber>{likes}</RatingNumber>
                  <ThumbDownIcon />
                  <RatingNumber>{dislikes}</RatingNumber>
                </Ratings>
              </ChannelAndRatingsContainer>
              <Divider />
              <Description>{description}</Description>
              <Divider />
              <Views>
                <VisibilityIcon />
                <ViewCount>{views}</ViewCount>
              </Views>
            </VideoInfo>
          </Wrapper>
        </>
      }
    </Container>
  );
}