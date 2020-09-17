import styled from "styled-components";
import { videoFrameDimensions } from "../../Theming/Globals";
import MUIButton from "@material-ui/core/Button";

export const Container = styled.li`
  width: ${videoFrameDimensions.xs.width};
  margin-bottom: 20px;
  height: 430px;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  background-color: ${props => props.theme.color.background};

  @media (min-width: 600px) {
    margin-right: 20px;
  }
`;

interface ThumbnailProps
{
  url : string;
}

export const Thumbnail = styled.div<ThumbnailProps>`
  width: ${videoFrameDimensions.xs.width};
  height: ${videoFrameDimensions.xs.height};
  flex-shrink: 0;

  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
`;

export const Channel = styled.h3`
  margin-top: 10px;
  font-size: 12px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
`;

export const DetailsButton = styled(MUIButton)`
  && {
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    align-self: flex-start;
    
    text-transform: uppercase;
    border-radius: 0;
    outline: none;
    color: white;
    background-color: ${props => props.theme.color.secondary.main};

    &:hover {
      background-color: ${props => props.theme.color.secondary.dark};
      box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
    }
  }
`;

export const ListItemPadding = styled.div`
  flex-grow: 1;
`;
