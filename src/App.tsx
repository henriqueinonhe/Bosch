import React, { useState } from "react";
import ReactDOM from "react-dom";
import YoutubeAPIController from "./Controllers/YoutubeAPIController";
import { YoutubeSearchResource } from "./Models/YoutubeSearchResponseData";
import VideoEntryList from "./Components/VideoEntryList/VideoEntryList";
import VideoEntryDetails from "./Components/VideoEntryDetails/VideoEntryDetails";
import SearchBar from "./Components/SearchBox/SearchBar";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import MUISkeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from "styled-components";
import { LightTheme, ThemeInterface } from "./Theming/Theme";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.color.primary.lighter};

  font-family: Roboto, sans-serif;
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
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<YoutubeSearchResource>>();
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [videoEntryDetailsVisible, setVideoEntryDetailsVisible] = useState(false);
  const [detailedVideoId, setDetailedVideoId] = useState<string>("");
  const [loadingSearchResults, setLoadingSearchResults] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeInterface>(LightTheme);

  async function handleSearchTriggered(searchQuery : string) : Promise<void>
  {
    setSearchTriggered(true);
    setLoadingSearchResults(true);
    setCurrentSearchQuery(searchQuery);
    
    const resultsData = await YoutubeAPIController.search(searchQuery);
    setNextPageToken(resultsData.nextPageToken);
    setSearchResults(resultsData.items);
    setLoadingSearchResults(false);
  }

  async function handleMoreEntriesTriggered() : Promise<void>
  {
    const resultsData = await YoutubeAPIController.search(currentSearchQuery, nextPageToken);
    setNextPageToken(resultsData.nextPageToken);
    setSearchResults(oldData => oldData!.concat(resultsData.items));
  }

  function handleShowEntryDetailsTriggered(videoId : string) : void
  {
    setDetailedVideoId(videoId);
    setVideoEntryDetailsVisible(true);
  }

  function handleHideEntryDetailsTriggered() : void
  {
    setVideoEntryDetailsVisible(false);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Main id="Main">
        <SearchBar 
          onSearchTriggered={handleSearchTriggered}
        />
        {
          searchTriggered ? 
            loadingSearchResults ?
              <ResultsCircularProgress /> :
              <VideoEntryList 
                onMoreEntriesTriggered={handleMoreEntriesTriggered} 
                entries={searchResults!}
                onShowEntryDetailsTriggered={handleShowEntryDetailsTriggered}
              /> :
            <></>
        }
        <VideoEntryDetails 
          isVisible={videoEntryDetailsVisible} 
          videoId={detailedVideoId} 
          onHideEntryDetailsTriggered={handleHideEntryDetailsTriggered}
        />
      </ Main>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

