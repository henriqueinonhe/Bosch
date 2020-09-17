import React, { SyntheticEvent, useState } from "react";
import { SearchBoxContainer, SearchBoxWrapper as SearchBox, SearchInput, SearchButton, SearchIcon } from "./SearchBarSubComponents";

interface SearchBarProps
{
  onSearchTriggered(searchQuery : string) : Promise<void>;
}

export default function SearchBar(props : SearchBarProps) : JSX.Element
{
  const {onSearchTriggered} = props;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false);

  function handleSearchInputChange(event : SyntheticEvent) : void
  {
    const currentSearchQuery = (event.target as HTMLInputElement).value;
    setSearchQuery(currentSearchQuery);
  }

  async function handleSearchButtonClick() : Promise<void>
  {
    setSearchTriggered(true);
    await onSearchTriggered(searchQuery);
  }

  async function handleSearchInputKeyPress(event : React.KeyboardEvent) :  Promise<void>
  {
    if(event.key === "Enter")
    {
      setSearchTriggered(true);
      await onSearchTriggered(searchQuery);
    }
  }

  return (
    <SearchBoxContainer searchTriggered={searchTriggered}>
      <SearchBox>
        <SearchInput 
          onKeyPress={handleSearchInputKeyPress} 
          value={searchQuery} 
          onChange={handleSearchInputChange}
        />
        <SearchButton onClick={handleSearchButtonClick}> 
          <SearchIcon />
        </SearchButton>
      </SearchBox>
    </SearchBoxContainer>
  );
}