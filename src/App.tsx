import styled from 'styled-components';

import PlayersList from './components/PlayersList';
import { players as playersData, Player } from './data';
import config from './config';
import Filters from './components/Filters';
import { useEffect, useState, type ChangeEvent, useRef } from 'react';

const { sports } = config;

const Grid = styled.div`
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function lowercase(value: string) {
  return value.toLocaleLowerCase();
}

export default function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const inputRefs = useRef<HTMLInputElement[]>([]);

  function filterChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked, value } = event.target;

    const sportId = +value;

    setSelectedFilters((prev) => {
      if (checked) {
        return [...prev, sportId];
      } else {
        return prev.filter((sport) => sport !== sportId);
      }
    });
  }

  function deleteFilter(id: number) {
    inputRefs.current[id].checked = false;

    setSelectedFilters((prev) => {
      return prev.filter((filter) => filter !== id);
    });
  }

  function searchResults(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchInput(value);
  }

  useEffect(() => {
    setPlayers(playersData);
    if (searchInput.length > 0) {
      setPlayers((prev) =>
        prev.filter((player) => {
          const firstName = lowercase(player.profile.firstName);
          const lastName = lowercase(player.profile.lastName);
          const searchInputValue = lowercase(searchInput);

          return (
            firstName.includes(lowercase(searchInputValue)) ||
            lastName.includes(lowercase(searchInputValue))
          );
        })
      );
    }
    if (selectedFilters.length > 0) {
      setPlayers((prev) =>
        prev.filter((player) => selectedFilters.includes(player.sportId))
      );
    }
  }, [searchInput, selectedFilters]);

  return (
    <Grid>
      <Filters
        sports={sports}
        selectedFilters={selectedFilters}
        filterChange={filterChange}
        deleteFilter={deleteFilter}
        inputRefs={inputRefs}
        searchInput={searchInput}
        searchResults={searchResults}
      />
      <PlayersList players={players} setPlayers={setPlayers} />
    </Grid>
  );
}
