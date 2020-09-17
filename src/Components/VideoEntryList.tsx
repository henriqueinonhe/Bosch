import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeSearchResource } from "../Models/YoutubeSearchResponseData";
import VideoEntry from "./VideoEntry";
import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`;

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  justify-content: center;
  padding: 20px 20px 0 20px;
  margin-top: 85px;
`;

const ErrorMessage = styled.p`
  text-align: center;
`;

const MoreEntriesCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 70
}))`
`;

interface VideoEntryListProps
{
  entries : Array<YoutubeSearchResource>;
  fetchMoreEntries() : Promise<void>;
  showVideoDetails(videoId : string) : void;
}

export default function VideoEntryList(props : VideoEntryListProps) : JSX.Element
{
  const {entries, fetchMoreEntries, showVideoDetails} = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Infinite Scroll
  useEffect(() =>
  {
    const callback = async () : Promise<void> => 
    {
      const listWrapper = document.querySelector("#VideoEntryList")!;
      const listWrapperYOffset = listWrapper.getBoundingClientRect().top;
      const listWrapperHeight = listWrapper.getBoundingClientRect().height;
      if(window.innerHeight >= listWrapperYOffset + listWrapperHeight && !isLoading)
      {
        setIsLoading(true);
        await fetchMoreEntries();
        setIsLoading(false);
      }
    };

    //If the window already has enough size to contain 
    //all entries, fetches new entries automatically until
    // the whole page is full
    callback();

    const container = document.querySelector("#VideoEntryListContainer")!;
    container.addEventListener("scroll", callback);
    return () =>
    {
      container.removeEventListener("scroll", callback);
    };


  }, [isLoading]);

  return (
    <Container id="VideoEntryListContainer">
      <ListWrapper id="VideoEntryList">
        {
          entries.length === 0 ?
            <ErrorMessage>Não encontramos vídeos com o termo buscado.<br />Utilize outras palavras-chave.</ErrorMessage> :
            entries.map((entry, index) => 
              <VideoEntry 
                key={index}
                thumbnail={entry.snippet.thumbnails["medium"].url}
                title={entry.snippet.title}
                channel={entry.snippet.channelTitle}
                description={entry.snippet.description} 
                showDetails={() => showVideoDetails(entry.id.videoId)}
              />)
        }
      </ListWrapper>
      {isLoading && <MoreEntriesCircularProgress />}
    </ Container>
  );
}
