import { useAppDispatch, useAppSelector } from "@store";
import { setSort } from "@store/search";
import { SortId, sorts } from "@store/search/types";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

export default function SortSelector() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(state => state.search.sort);

  const updateSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSortId = e.target.value as SortId;
    const newSort = {
      id: newSortId,
      name: sorts[newSortId],
    };
    dispatch(setSort(newSort));
  };

  return (
    <StyledSelectWrapper>
      <StyledLabel htmlFor="sort">Ordenar por:</StyledLabel>
      <StyledSelect name="sort" value={currentSort.id} onChange={updateSelect}>
        {Object.entries(sorts).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
}

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: var(--fs-sm);
  margin-right: 0.5rem;
  color: var(--fg-2);
  white-space: nowrap;
`;

export const StyledSelect = styled.select`
  font-size: var(--fs-sm);
  cursor: pointer;
  background-color: transparent;
  color: var(--fg-2);
  width: 15ch;
  &:focus {
    outline: none;
  }
  option {
    background-color: black;
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
