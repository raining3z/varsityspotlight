import styled from 'styled-components';

import PlayersList from './components/PlayersList';
import { players as playersData, Player } from './data';
import config from './config';
import Filters from './components/Filters';
import { useEffect, useState, type ChangeEvent, useRef } from 'react';
import Header from './components/Header';
import SearchField from './components/Search';

const { sports } = config;

const MainContainer = styled.div`
  padding-top: 50px;
`;

const Body = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.widths.maxWidth};
  margin: 0 auto;
  min-height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftNav = styled.div`
  width: 250px;
  padding: 2rem;
  background: #f7f7f7;
  border-right: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

const Grid = styled.div`
  flex: 1;
  padding: 2rem;
`;

function lowercase(value: string) {
  return value.toLocaleLowerCase();
}

export default function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

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

  function sortBy(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setSortOption(value);
  }

  // function showSortOption(option: string, data: Player[]) {
  //   if (option === 'desc') {
  //     data.sort((a, b) => b.profile.lastName.localeCompare(a.profile.lastName));
  //   } else {
  //     data.sort((a, b) => a.profile.lastName.localeCompare(b.profile.lastName));
  //   }
  // }

  useEffect(() => {
    // console.log(sortOption);
    setPlayers(
      playersData.sort((a, b) =>
        a.profile.lastName.localeCompare(b.profile.lastName)
      )
    );

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
  }, [searchInput, selectedFilters, sortOption]);

  return (
    <MainContainer>
      <Header />
      <Body>
        <LeftNav>
          <SearchField
            searchInput={searchInput}
            searchResults={searchResults}
          />
          <Filters
            sports={sports}
            selectedFilters={selectedFilters}
            filterChange={filterChange}
            deleteFilter={deleteFilter}
            inputRefs={inputRefs}
          />
        </LeftNav>

        <Grid>
          <PlayersList
            players={players}
            setPlayers={setPlayers}
            sortOption={sortOption}
            sortBy={sortBy}
          />
        </Grid>
      </Body>
    </MainContainer>
  );
}
