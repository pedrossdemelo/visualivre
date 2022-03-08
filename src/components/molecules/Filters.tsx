import {
  ConditionSelector,
  CurrentQuery,
  PriceSelector,
  Search,
  ShippingSelector,
  SortSelector,
} from "@atoms";
import React, { memo } from "react";
import styled from "styled-components";

function Filters() {
  return (
    <FilterContainer>
      <CurrentQuery />
      <FilterRow>
        <Search />
        <SortSelector />
        <ConditionSelector />
        <ShippingSelector />
        <PriceSelector />
      </FilterRow>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  position: absolute;
  background-color: var(--bg-t-1);
  min-width: 100%;
  height: var(--filters-h);
  backdrop-filter: blur(12px) saturate(200%);
  width: 100%;
  overflow: hidden;

  @supports not (backdrop-filter: blur(12px)) {
    background-color: var(--bg-1);
  }
`;

const FilterRow = styled.div`
  display: flex;
  height: 2.5rem;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  overflow: hidden;
`;

export default memo(Filters);
