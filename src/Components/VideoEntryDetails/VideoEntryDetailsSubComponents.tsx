import styled from "styled-components";
import MUIArrowBackIcon from "@material-ui/icons/ArrowBack";
import { videoFrameDimensions } from "../../Theming/Globals";
import MUIThumbUpIcon from "@material-ui/icons/ThumbUp";
import MUIThumbDownIcon from "@material-ui/icons/ThumbDown";
import MUIVisibilityIcon from "@material-ui/icons/Visibility";
import MUIButton from "@material-ui/core/Button";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow-y: scroll;

  background-color: ${props => props.theme.color.background};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 0;
  align-items: center;
`;

export const NavigateBeforeButton = styled(MUIButton)`

`;

export const NavigateBeforeIcon = styled(MUIArrowBackIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 20px;

    color: ${props => props.theme.color.secondary.dark};
    font-size: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;

export const Video = styled.iframe.attrs(() => ({
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
  flex-shrink: 0;
  
  border: none;
`;

export const VideoInfo = styled.div`
  width: 90vw;
  max-width: ${videoFrameDimensions.xl.width};
  max-height: ${videoFrameDimensions.xl.height};
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ChannelAndRatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  width: 100%;
`;

export const ThumbUpIcon = styled(MUIThumbUpIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 10px;
    color: ${props => props.theme.color.secondary.dark};
  }
`;

export const ThumbDownIcon = styled(MUIThumbDownIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 10px;
    color: ${props => props.theme.color.secondary.dark};
  }
`;

export const Channel = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const Ratings = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const RatingNumber = styled.span`
  margin-right: 10px;
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: 14px;
`;

export const Views = styled.div`
  margin-top: 15px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const VisibilityIcon = styled(MUIVisibilityIcon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    margin-right: 5px;
    color: ${props => props.theme.color.secondary.dark};
  }
  
`;

export const ViewCount = styled.span`
`;