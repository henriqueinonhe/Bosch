import React, { SyntheticEvent, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MUISearchIcon from "@material-ui/icons/Search";
import YoutubeSearchController from "./Controllers/YoutubeSearchController";
import { YoutubeSearchResource } from "./Models/YoutubeSearchResponseData";
import SearchResultsList from "./Components/SearchResultsList";
import CircularProgress from "@material-ui/core/CircularProgress";
import Theme from "./Theming/Theme";
import ResultEntryDetails from "./Components/ResultEntryDetails";

const Main = styled.main`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  overflow-y: scroll;
  /* background-color: ${Theme.color.primary.main}; */
`;

interface SearchBoxProps
{
  searchActivated : boolean;
}

const SearchBox = styled.div<SearchBoxProps>`
  --height: 45px;

  background-color: rgba(255, 255, 255, 1);
  border: 2px solid gray;
  height: var(--height);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: calc(50% - var(--height) / 2);
  z-index: 1;
  margin-bottom: 20px;

  animation-name: moveUp;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-play-state: ${props => props.searchActivated ? "running" : "paused"};
  animation-fill-mode: forwards;

  @keyframes moveUp {
    from {
      margin-top: 0;
      top: calc(50% - var(--height) / 2);
    }
    to {
      margin-top: 20px;
      top: 0;
    }
  }
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

const SearchButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
`;

const ResultsDisplay = styled.div`
`;

const ResultsCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 100
}))`

  && {
    margin-top: 25vh;
  }

`;

function App() : JSX.Element
{
  const [searchActivated, setSearchActivated] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<YoutubeSearchResource>>();
  const [showingVideoDetails, setShowingVideoDetails] = useState(false);

  async function runSearch() : Promise<void>
  {
    setSearchActivated(true);
    
    const resultData = await YoutubeSearchController.search(searchQuery);
    setSearchResults(resultData.items);
    setNextPageToken(resultData.nextPageToken);
  }

  async function fetchMoreResults() : Promise<void>
  {
    //Mock fetch
    const promise = new Promise(resolve => 
    {
      setTimeout(resolve, 1500);
    }).then(() => setSearchResults(results => results?.concat(results.slice(0, 5))));

    await promise;
  }

  async function handleSearchButtonClick() : Promise<void>
  {
    await runSearch();
  }

  function handleSearchInputChange(event : SyntheticEvent) : void
  {
    const currentSearchQuery = (event.target as HTMLInputElement).value;
    setSearchQuery(currentSearchQuery);
  }

  async function handleSearchInputKeyPress(event : React.KeyboardEvent) :  Promise<void>
  {
    if(event.key === "Enter")
    {
      await runSearch();
    }
  }

  const fetchingSearchResults = searchActivated && searchResults === undefined;

  return (
    <Main id="Main">
      <SearchBox searchActivated={searchActivated}>
        <SearchInput 
          onKeyPress={handleSearchInputKeyPress} 
          value={searchQuery} 
          onChange={handleSearchInputChange}
        />
        <SearchButton onClick={handleSearchButtonClick}> 
          <SearchIcon />
        </SearchButton>
      </SearchBox>
      {
        searchActivated &&
        <ResultsDisplay>
          {
            fetchingSearchResults ?
              <ResultsCircularProgress /> :
              <SearchResultsList 
                fetchMoreEntries={fetchMoreResults} 
                entries={searchResults!}
                setShowingDetails={setShowingVideoDetails}
              />
          }
        </ResultsDisplay>
      }
      <ResultEntryDetails visible={showingVideoDetails} />
    </ Main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

