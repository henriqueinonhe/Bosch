import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import Theme from "../Theming/Theme";
import MUISearchIcon from "@material-ui/icons/Search";
import MUIButton from "@material-ui/core/Button";

interface SearchBoxContainerProps
{
  searchActivated : boolean;
}

const SearchBoxContainer = styled.div<SearchBoxContainerProps>`
  --height: 85px;

  /* transition: box-shadow 500ms;
  
  &:hover {
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
  } */

  z-index: 1;
  top: calc(50% - var(--height) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: box-shadow 500ms;
  max-width: 600px;
  width: calc(100% - 40px);
  padding: 0;
  top: calc(50% - var(--height) / 2);
  
  &:hover, &:focus-within  {
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
  }

  ${props => props.searchActivated &&
  `
  animation-name: moveUp;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes moveUp {
    to {
      max-width: 100%;
      width: 100%;
      padding: 20px;
      top: 0;
      position: fixed;
      box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.4);
    }
  }
  ` };
`;

const SearchBoxWrapper = styled.div`
  /* background-color: rgba(255, 255, 255, 0.3); */
  border: 2px solid gray;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  max-width: 800px;
`;

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Pesquisar"
}))`
  background-color: rgba(255, 255, 255, 0);
  color: ${Theme.color.font.default};
  text-indent: 10px;
  border: none;
  outline: none;
  height: 100%;
  flex-grow: 1;
`;

const SearchIcon = styled(MUISearchIcon)`
  color: ${Theme.color.font.default};
  margin-right: 10px;
`;

const SearchButton = styled(MUIButton)`
  && {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    min-width: 0;
  }
`;

interface SearchBoxProps
{
  searchActivated : boolean;
  runSearch(searchQuery : string) : Promise<void>;
}


export default function SearchBox(props : SearchBoxProps) : JSX.Element
{
  const {searchActivated, runSearch} = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleSearchInputChange(event : SyntheticEvent) : void
  {
    const currentSearchQuery = (event.target as HTMLInputElement).value;
    setSearchQuery(currentSearchQuery);
  }

  async function handleSearchButtonClick() : Promise<void>
  {
    await runSearch(searchQuery);
  }

  async function handleSearchInputKeyPress(event : React.KeyboardEvent) :  Promise<void>
  {
    if(event.key === "Enter")
    {
      await runSearch(searchQuery);
    }
  }

  return (
    <SearchBoxContainer searchActivated={searchActivated}>
      <SearchBoxWrapper>
        <SearchInput 
          onKeyPress={handleSearchInputKeyPress} 
          value={searchQuery} 
          onChange={handleSearchInputChange}
        />
        <SearchButton onClick={handleSearchButtonClick}> 
          <SearchIcon />
        </SearchButton>
      </SearchBoxWrapper>
    </SearchBoxContainer>
  );
}