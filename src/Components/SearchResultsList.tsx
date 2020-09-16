import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeSearchResource } from "../Models/YoutubeSearchResponseData";
import ResultEntry from "./ResultEntry";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  background-color: white;
`;

interface SearchResultsListProps
{
  entries : Array<YoutubeSearchResource>;
  fetchMoreEntries() : Promise<void>;
  setShowingDetails(status : boolean | ((status : boolean) => boolean)) : void;
}

const MoreEntriesCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 70
}))`
`;

export default function SearchResultsList(props : SearchResultsListProps) : JSX.Element
{
  const {entries, fetchMoreEntries, setShowingDetails} = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Infinite Scroll
  useEffect(() =>
  {
    const callback = async () : Promise<void> => 
    {
      const listWrapper = document.querySelector("#SearchResultsList")!;
      const listWrapperYOffset = listWrapper.getBoundingClientRect().top;
      const listWrapperHeight = listWrapper.getBoundingClientRect().height;
      if(window.innerHeight >= listWrapperYOffset + listWrapperHeight && !isLoading)
      {
        setIsLoading(true);
        await fetchMoreEntries();
        setIsLoading(false);
      }
    };

    const main = document.querySelector("#Main")!;
    main.addEventListener("scroll", callback);
    return () =>
    {
      main.removeEventListener("scroll", callback);
    };

  }, [isLoading]);

  async function showVideoDetails() : Promise<void>
  {
    setShowingDetails(status => !status);
  }

  return (
    <Container>
      <ListWrapper id="SearchResultsList">
        {
          entries.length === 0 ?
            <p>Não encontramos vídeos com o termo buscado.<br />Utilize outras palavras-chave.</p> :
            entries.map((item, index) => 
              <ResultEntry 
                key={/*item.etag*/ index}
                thumbnail={item.snippet.thumbnails["medium"].url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                description={item.snippet.description} 
                showDetails={showVideoDetails}
              />)
        }
      </ListWrapper>
      {isLoading && <MoreEntriesCircularProgress />}
    </ Container>
  );
}
