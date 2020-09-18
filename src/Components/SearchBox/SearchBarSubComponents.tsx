import styled, { css } from "styled-components";
import MUISearchIcon from "@material-ui/icons/Search";
import MUIButton from "@material-ui/core/Button";
import { lightShadow } from "../../Theming/Theme";

interface SearchBoxContainerProps
{
  searchTriggered : boolean;
}

export const SearchBoxContainer = styled.div<SearchBoxContainerProps>`
  --height: 85px;

  z-index: 1;
  top: calc(50% - var(--height) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: calc(100% - 40px);
  top: calc(50% - var(--height) / 2);
  
  background-color: ${props => props.theme.type === "light" ? props.theme.color.primary.dark : props.theme.color.primary.main};
  transition: box-shadow 400ms;

  &:hover, &:focus-within  {
    box-shadow: ${props => props.theme.type === "light" ? props.theme.elevation(3) : lightShadow(2)};
  }

  ${props => props.searchTriggered && css`
    animation-name: moveUp;
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  ` };

  @keyframes moveUp {
    to {
      max-width: 100%;
      width: 100%;
      padding: 20px;
      top: 0;
      position: fixed;
      box-shadow: ${props => props.theme.type === "light" ? props.theme.elevation(3) : lightShadow(2)};
    }
  }
`;

export const SearchBoxWrapper = styled.div`
  border: 2px solid ${props => props.theme.color.secondary.main};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  max-width: 800px;

  background-color: ${props => props.theme.color.background};
`;

export const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Pesquisar"
}))`
  text-indent: 10px;
  height: 100%;
  flex-grow: 1;

  border: none;
  outline: none;
  color: ${props => props.theme.color.textOverBackground};
  background-color: rgba(255, 255, 255, 0);
`;

export const SearchIcon = styled(MUISearchIcon)`
  margin-right: 10px;

  && {
    color: ${props => props.theme.color.secondary.main};
  }
`;

export const SearchButton = styled(MUIButton)`
  && {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    min-width: 0;

    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;

    &:hover {
      background-color: gray;
    }
  }
`;
