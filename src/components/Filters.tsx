import { type RefObject, type ChangeEvent } from 'react';
import styled from 'styled-components';

interface FilterProps {
  sports: {
    id: number;
    label: string;
  }[];
  selectedFilters: number[];
  filterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteFilter: (id: number) => void;
  inputRefs: RefObject<HTMLInputElement[]>;
  searchInput: string;
  searchResults: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilterContainer = styled.aside`
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

const FilterLabel = styled.h2`
  margin-bottom: 1rem;
`;

const FilterOptions = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
`;

const FilterOption = styled.li`
  margin-bottom: 0.5rem;
`;

const FilterOptionLabel = styled.label`
  cursor: pointer;
`;

const Filter = styled.div`
  color: red;
`;

const DeleteFilter = styled.div`
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
`;

const Search = styled.div``;

export default function Filters({
  sports,
  selectedFilters,
  filterChange,
  deleteFilter,
  inputRefs,
  searchInput,
  searchResults,
}: FilterProps) {
  return (
    <FilterContainer>
      <Search>
        <FilterLabel>Search</FilterLabel>
        <input
          type="text"
          value={searchInput}
          onChange={searchResults}
          placeholder="Search players"
        />
      </Search>
      {selectedFilters.map((filter) => {
        const sportName = sports.find((sport) => sport.id === filter);
        return (
          <Filter key={filter}>
            {sportName?.label}{' '}
            <DeleteFilter onClick={() => deleteFilter(filter)}>X</DeleteFilter>
          </Filter>
        );
      })}
      <FilterLabel>Filters</FilterLabel>
      <FilterOptions>
        {sports.map((sport) => {
          const sportName = sport.label.toLocaleLowerCase();

          return (
            <FilterOption key={sport.id}>
              <FilterOptionLabel htmlFor={sportName}>
                <input
                  type="checkbox"
                  value={sport.id}
                  id={sportName}
                  onChange={filterChange}
                  ref={(el) => {
                    if (el) inputRefs.current[sport.id] = el;
                  }}
                />{' '}
                {sport.label}
              </FilterOptionLabel>
            </FilterOption>
          );
        })}
      </FilterOptions>
    </FilterContainer>
  );
}
