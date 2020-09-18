import styled from "styled-components";
import { videoFrameDimensions } from "../../Theming/Globals";
import MUIButton from "@material-ui/core/Button";
import { lightShadow } from "../../Theming/Theme";

export const Container = styled.li`
  width: ${videoFrameDimensions.xs.width};
  margin-bottom: 20px;
  height: 430px;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.type === "light" ? props.theme.color.surface : props.theme.elevation(2)};
  box-shadow: ${props => props.theme.type === "light" ? props.theme.elevation(2) : "none"};

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
      background-color: ${props => props.theme.type === "light" ? props.theme.color.secondary.dark : props.theme.color.secondary.light};
      box-shadow: ${props => props.theme.type === "light" ? props.theme.elevation(3) : lightShadow(2)};
    }
  }
`;

export const ListItemPadding = styled.div`
  flex-grow: 1;
`;
