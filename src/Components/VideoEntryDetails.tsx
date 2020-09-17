import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MUINavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { videoFrameDimensions } from "../Theming/Globals";
import MUIThumbUpIcon from "@material-ui/icons/ThumbUp";
import MUIThumbDownIcon from "@material-ui/icons/ThumbDown";
import MUIVisibilityIcon from "@material-ui/icons/Visibility";
import YoutubeVideoDetailsController from "../Controllers/YoutubeVideoDetailsController";
import { YoutubeVideoDetailsResponseData } from "../Models/YoutubeVideoDetailsResponseData";

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 0;
  align-items: center;
`;

const NavigateBeforeIcon = styled(MUINavigateBeforeIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    border: 2px solid gray;
    font-size: 32px;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;

const Video = styled.iframe.attrs(() => ({
  frameborder: "0", 
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: true
}))`
  min-width: ${videoFrameDimensions.xs.width};
  min-height: ${videoFrameDimensions.xs.height};
  max-width: ${videoFrameDimensions.xl.width};
  max-height: ${videoFrameDimensions.xl.height};
  width: 90vw;
  height: 50.62vw;
  align-self: center;
  border: none;
`;

const VideoInfo = styled.div`
  width: 90vw;
  max-width: ${videoFrameDimensions.xl.width};
  max-height: ${videoFrameDimensions.xl.height};
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const ChannelAndRatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  width: 100%;
`;

const ThumbUpIcon = styled(MUIThumbUpIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 10px;
  }
`;

const ThumbDownIcon = styled(MUIThumbDownIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 10px;
  }
`;

const Channel = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Ratings = styled.div`
`;

const RatingNumber = styled.span`
  margin-right: 10px;
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 14px;
`;

const Views = styled.div`
  margin-top: 15px;
`;

const VisibilityIcon = styled(MUIVisibilityIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  margin-right: 5px;
`;

const ViewCount = styled.span`
`;

interface ResultEntryDetailsProps
{
  visible : boolean;
  videoId : string;
  hideVideoDetails() : void;
}

export default function VideoEntryDetails(props : ResultEntryDetailsProps) : JSX.Element
{
  const {visible, videoId, hideVideoDetails} = props;
  const [videoDetails, setVideoDetails] = useState<YoutubeVideoDetailsResponseData>();

  const title = videoDetails?.items[0]!.snippet.title || "";
  const channel = videoDetails?.items[0]!.snippet.channelTitle || "";
  const description = videoDetails?.items[0]!.snippet.description || "";
  const likes = videoDetails?.items[0]!.statistics.likeCount || "";
  const dislikes = videoDetails?.items[0]!.statistics.dislikeCount || "";
  const views = videoDetails?.items[0]!.statistics.viewCount || "";
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => 
  {
    (async () => 
    {
      const data = await YoutubeVideoDetailsController.details(videoId);
      setVideoDetails(data);
    })();
  }, [videoId]);

  return (
    <Container id="VideoEntryDetailsContainer">
      {
        visible &&
        <>
          <Header>
            <NavigateBeforeIcon onClick={hideVideoDetails} />
            <Title>{title}</Title>
          </Header>
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
            <Description>{description}</Description>
            <Views>
              <VisibilityIcon />
              <ViewCount>{views}</ViewCount>
            </Views>
          </VideoInfo>
        </>
      }
    </Container>
  );
}