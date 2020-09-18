import React, { useState } from "react";
import ReactDOM from "react-dom";
import YoutubeAPIController from "./Controllers/YoutubeAPIController";
import { YoutubeSearchResource } from "./Models/YoutubeSearchResponseData";
import VideoEntryList from "./Components/VideoEntryList/VideoEntryList";
import VideoEntryDetails from "./Components/VideoEntryDetails/VideoEntryDetails";
import SearchBar from "./Components/SearchBox/SearchBar";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import MUIButton from "@material-ui/core/IconButton";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, ThemeInterface } from "./Theming/Theme";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  
  background-color: ${props => props.theme.type === "light" ? props.theme.color.primary.lighter : props.theme.color.background};
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2px;
  color: ${props => props.theme.color.textOverBackground};
  line-height: 18px;
  white-space: pre-line;
`;

const ResultsCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 100,
  color: "inherit"
}))`

  && {
    margin-top: 25vh;

    color: ${props => props.theme.color.secondary.main};
  }
`;

const ThemeSwitchButton = styled(MUIButton).attrs(() => ({

}))`
  && {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: ${props => props.theme.type === "light" ? "black" : "white"};
    z-index: 4;

    &:hover {
      background-color: gray;
    }
  }
`;

const SunIcon = styled(Brightness5Icon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    font-size: 36px;
    color: black;
  }
`;

const MoonIcon = styled(Brightness3Icon).attrs(() => ({
  fontSize: "inherit"
}))`
  && {
    font-size: 36px;
    color: white;
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

  function handleThemeSwitchButtonClick() : void
  {
    setCurrentTheme(theme => theme.type === "light" ? DarkTheme : LightTheme);
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
        <ThemeSwitchButton onClick={handleThemeSwitchButtonClick}>
          {currentTheme.type === "light" ? 
            <MoonIcon /> :
            <SunIcon /> 
          }
        </ThemeSwitchButton>
      </ Main>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

