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
  const [searchResults, setSearchResults] = useState<Array<YoutubeSearchResource>>();
  const [showingVideoDetails, setShowingVideoDetails] = useState(false);
  const [detailedVideoId, setDetailedVideoId] = useState<string>("");

  async function runSearch(searchQuery : string) : Promise<void>
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

  function showVideoDetails(videoId : string) : void
  {
    setDetailedVideoId(videoId);
    const videoEntryDetailsContainer = document.querySelector("#VideoEntryDetailsContainer") as HTMLElement;
    videoEntryDetailsContainer.animate(
      [
        {transform: "translateX(0)"}     
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards"
      }
    );
    setTimeout(() => setShowingVideoDetails(true), 500);
  }

  function hideVideoDetails() : void
  {
    const videoEntryDetailsContainer = document.querySelector("#VideoEntryDetailsContainer") as HTMLElement;
    videoEntryDetailsContainer.animate(
      [
        {transform: "translateX(100vw)"}     
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards"
      }
    );
    setTimeout(() => setShowingVideoDetails(false), 500);
  }

  const fetchingSearchResults = searchActivated && searchResults === undefined;

  return (
    <Main id="Main">
      <SearchBox 
        searchActivated={searchActivated}
        runSearch={runSearch}
      />
      {
        searchActivated ? 
          fetchingSearchResults ?
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

