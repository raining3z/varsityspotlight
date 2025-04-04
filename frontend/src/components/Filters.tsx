import { type RefObject, type ChangeEvent } from 'react';
import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

interface FilterProps {
  sports: {
    id: number;
    label: string;
  }[];
  selectedFilters: number[];
  filterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteFilter: (id: number) => void;
  inputRefs: RefObject<HTMLInputElement[]>;
}

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

const FilterTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FilterTag = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const DeleteFilter = styled(FaTimes)`
  margin-left: 5px;
`;

export default function Filters({
  sports,
  selectedFilters,
  filterChange,
  deleteFilter,
  inputRefs,
}: FilterProps) {
  return (
    <>
      <FilterTags>
        <FilterLabel>Filters</FilterLabel>
        {selectedFilters.map((filter) => {
          const sportName = sports.find((sport) => sport.id === filter);
          return (
            <FilterTag key={filter} onClick={() => deleteFilter(filter)}>
              {sportName?.label} <DeleteFilter />
            </FilterTag>
          );
        })}
      </FilterTags>
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
    </>
  );
}
