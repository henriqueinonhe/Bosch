import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MUISearchIcon from "@material-ui/icons/Search";
import Theme from "./Theming/Theme";

const Main = styled.main`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

interface SearchBoxProps
{
  searchActivated : boolean;
}

const SearchBox = styled.div<SearchBoxProps>`
  border: 2px solid gray;
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  animation-name: moveUp;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-play-state: ${props => props.searchActivated ? "running" : "paused"};
  animation-fill-mode: forwards;

  @keyframes moveUp {
    from {
      bottom: 0;
    }
    to {
      bottom: 200px;
    }
  }
`;

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Pesquisar"
}))`
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

const SearchButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
`;

const ResultsDisplay = styled.ul`

`;

function App() : JSX.Element
{
  const [searchActivated, setSearchActivated] = useState(false);
  const [searchResults, setSearchResults] = useState<unknown>(undefined);

  function handleSearchButtonClick() : void
  {
    setSearchActivated(true);
  }

  return (
    <Main>
      <SearchBox searchActivated={searchActivated}>
        <SearchInput />
        <SearchButton onClick={handleSearchButtonClick}> 
          <SearchIcon />
        </SearchButton>
      </SearchBox>
      <ResultsDisplay>
      </ResultsDisplay>
    </ Main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

