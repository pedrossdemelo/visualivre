import { useAppDispatch, useAppSelector } from "@store";
import { setSort } from "@store/search";
import { SortId, sorts } from "@store/search/types";
import { useMediaQuery } from "hooks";
import { Sort } from "iconsax-react";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

export default function SortSelector() {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
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
      <StyledLabel htmlFor="sort">Ordem:</StyledLabel>
      <StyledSortSelect
        name="sort"
        value={currentSort.id}
        onChange={updateSelect}
      >
        {Object.entries(sorts).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </StyledSortSelect>
      {!isSmallScreen && <Sort size={20} style={{ marginLeft: "1rem" }} />}
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
  color: var(--yellow-2);
  &:focus {
    outline: none;
  }
  option {
    background-color: var(--bg-1);
  }
`;

const StyledSortSelect = styled(StyledSelect)`
  max-width: 12.5ch;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
