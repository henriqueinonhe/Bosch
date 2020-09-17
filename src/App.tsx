import React, { useState } from "react";
import ReactDOM from "react-dom";
import YoutubeSearchController from "./Controllers/YoutubeSearchController";
import { YoutubeSearchResource } from "./Models/YoutubeSearchResponseData";
import VideoEntryList from "./Components/VideoEntryList";
import VideoDetails from "./Components/VideoEntryDetails";
import SearchBox from "./Components/SearchBox";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Theme from "./Theming/Theme";

const Main = styled.main`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  /* letter-spacing: 0.75px; */
  /* background-color: ${Theme.color.primary.main}; */
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
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [currentSearchQuery, setCurrentSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<YoutubeSearchResource>>();
  const [showingVideoDetails, setShowingVideoDetails] = useState(false);
  const [detailedVideoId, setDetailedVideoId] = useState<string>("");
  const [loadingSearchResults, setLoadingSearchResults] = useState<boolean>(false);

  async function runSearch(searchQuery : string) : Promise<void>
  {
    setSearchActivated(true);
    setLoadingSearchResults(true);
    setCurrentSearchQuery(searchQuery);
    
    const resultData = await YoutubeSearchController.search(searchQuery);
    setNextPageToken(resultData.nextPageToken);
    setSearchResults(resultData.items);
    setLoadingSearchResults(false);
  }

  async function fetchMoreResults() : Promise<void>
  {
    const resultData = await YoutubeSearchController.search(currentSearchQuery, nextPageToken);
    setNextPageToken(resultData.nextPageToken);
    setSearchResults(oldData => oldData!.concat(resultData.items));
  }

  function showVideoDetails(videoId : string) : void
  {
    setDetailedVideoId(videoId);
    const videoEntryDetailsContainer = document.querySelector("#VideoEntryDetailsContainer") as HTMLElement;
    videoEntryDetailsContainer.animate(
      [
        {transform: "translateX(0)"}     
      ],
      {
        duration: 700,
        easing: "ease",
        fill: "forwards"
      }
    );
    setTimeout(() => setShowingVideoDetails(true), 750);
  }

  function hideVideoDetails() : void
  {
    const videoEntryDetailsContainer = document.querySelector("#VideoEntryDetailsContainer") as HTMLElement;
    videoEntryDetailsContainer.animate(
      [
        {transform: "translateX(100vw)"}     
      ],
      {
        duration: 700,
        easing: "ease",
        fill: "forwards"
      }
    );
    setTimeout(() => setShowingVideoDetails(false), 750);
  }

  return (
    <Main id="Main">
      <SearchBox 
        searchActivated={searchActivated}
        runSearch={runSearch}
      />
      {
        searchActivated ? 
          loadingSearchResults ?
            <ResultsCircularProgress /> :
            <VideoEntryList 
              fetchMoreEntries={fetchMoreResults} 
              entries={searchResults!}
              showVideoDetails={showVideoDetails}
            /> :
          <></>
      }
      <VideoDetails 
        visible={showingVideoDetails} 
        videoId={detailedVideoId} 
        hideVideoDetails={hideVideoDetails}
      />
    </ Main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

