import React, { useEffect, useRef, useState } from "react";
import { YoutubeSearchResource } from "../../Models/YoutubeSearchResponseData";
import VideoEntry from "../VideoEntry/VideoEntry";
import { Container, ErrorMessage, ListWrapper, MoreEntriesCircularProgress } from "./VideoEntryListSubComponents";

interface VideoEntryListProps
{
  entries : Array<YoutubeSearchResource>;
  onMoreEntriesTriggered() : Promise<void>;
  onShowEntryDetailsTriggered(videoId : string) : void;
}

export default function VideoEntryList(props : VideoEntryListProps) : JSX.Element
{
  const {entries, onMoreEntriesTriggered, onShowEntryDetailsTriggered} = props;

  const [loadingMoreEntries, setLoadingMoreEntries] = useState<boolean>(false);
  const listWrapperRef = useRef<HTMLUListElement>(null);

  async function handleLoadMoreEntriesAttempt() : Promise<void>
  {
    const listWrapper = listWrapperRef.current!;
    const listWrapperYOffset = listWrapper.getBoundingClientRect().top;
    const listWrapperHeight = listWrapper.getBoundingClientRect().height;
    const shouldLoadMoreEntries = window.innerHeight >= listWrapperYOffset + listWrapperHeight && !loadingMoreEntries && entries.length !== 0;
    if(shouldLoadMoreEntries)
    {
      setLoadingMoreEntries(true);
      await onMoreEntriesTriggered();
      setLoadingMoreEntries(false);
    }
  }

  //If the window already has enough size to contain more
  //entries, fetches new entries automatically until
  // the whole page is full and user needs to scroll to
  // see more entries
  useEffect(() =>
  {
    handleLoadMoreEntriesAttempt();
  }, [loadingMoreEntries]);

  return (
    <Container onScroll={handleLoadMoreEntriesAttempt}>
      <ListWrapper ref={listWrapperRef}>
        {
          entries.length === 0 ?
            <ErrorMessage>
              Não encontramos vídeos com o termo buscado.<br />Utilize outras palavras-chave.
            </ErrorMessage> :
            entries.map((entry, index) => 
              <VideoEntry 
                key={index} /* As API may return the same video for different pages, we'll be using indexes */
                thumbnail={entry.snippet.thumbnails["medium"].url}
                title={entry.snippet.title}
                channel={entry.snippet.channelTitle}
                description={entry.snippet.description} 
                onShowDetailsTriggered={() => onShowEntryDetailsTriggered(entry.id.videoId)}
              />)
        }
      </ListWrapper>
      {loadingMoreEntries && <MoreEntriesCircularProgress />}
    </ Container>
  );
}
