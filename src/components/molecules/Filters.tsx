import {
  ConditionSelector,
  CurrentQuery,
  PriceSelector,
  Search,
  ShippingSelector,
  SortSelector,
} from "@atoms";
import { Filter } from "iconsax-react";
import React, { memo } from "react";
import styled from "styled-components";

function Filters() {
  return (
    <SearchAndFilterContainer>
      <CurrentQuery />
      <SearchAndSortContainer>
        <Search />
        <SortSelector />
      </SearchAndSortContainer>
      <FiltersContainer>
        <FilterGroup>
          <Filter size={20} />
          <ConditionSelector />
          <ShippingSelector />
        </FilterGroup>
        <PriceSelector />
      </FiltersContainer>
    </SearchAndFilterContainer>
  );
}

const SearchAndFilterContainer = styled.div`
  position: absolute;
  background-color: var(--bg-t-1);
  min-width: 100%;
  backdrop-filter: blur(12px) saturate(200%);
  width: 100%;
  overflow: hidden;
  z-index: 100;

  @supports not (backdrop-filter: blur(12px)) {
    background-color: var(--bg-1);
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 0;
  }
`;

const FiltersContainer = styled.div`
  padding: 0 2rem 0.25rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 2.75rem;
  @media (max-width: 480px) {
    padding: 0 1rem 0.25rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  @media (max-width: 480px) {
    & > :first-child {
      display: none;
    }
  }
`;

const SearchAndSortContainer = styled.div`
  display: flex;
  height: 2.5rem;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 3rem;
    padding: 0.5rem 1rem 0;
  }
`;

export default memo(Filters);
