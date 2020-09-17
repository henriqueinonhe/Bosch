import styled, { css, keyframes } from "styled-components";
import Theme from "../../Theming/Theme";
import MUISearchIcon from "@material-ui/icons/Search";
import MUIButton from "@material-ui/core/Button";

interface SearchBoxContainerProps
{
  searchTriggered : boolean;
}

const moveUp = keyframes`
  to {
    max-width: 100%;
    width: 100%;
    padding: 20px;
    top: 0;
    position: fixed;
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
  }
`;

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
  
  background-color: white;
  transition: box-shadow 500ms;

  &:hover, &:focus-within  {
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
  }

  ${props => props.searchTriggered && css`
    animation-name: ${moveUp};
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  ` };
`;

export const SearchBoxWrapper = styled.div`
  border: 2px solid gray;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  max-width: 800px;
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
  color: ${Theme.color.font.default};
  background-color: rgba(255, 255, 255, 0);
`;

export const SearchIcon = styled(MUISearchIcon)`
  margin-right: 10px;

  color: ${Theme.color.font.default};
`;

export const SearchButton = styled(MUIButton)`
  && {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    min-width: 0;

    border: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
  }
`;
