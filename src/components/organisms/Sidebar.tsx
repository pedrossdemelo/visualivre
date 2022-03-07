import { useAppDispatch, useAppSelector } from "@store";
import { setCategory } from "@store/search";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

export default function Sidebar({ categories }: SidebarProps) {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.search.category);

  function selectCategory(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value, selectedCategory);
    if (e.target.value === selectedCategory) {
      dispatch(setCategory(""));
      return;
    }
    dispatch(setCategory(e.target.value));
  }

  return (
    <StyledSidebar>
      <StyledHeading>🧐 VisuaLivre</StyledHeading>
      <StyledCategories role="radiogroup">
        {categories.slice(0, -1).map(category => (
          <StyledCategoryLabel
            aria-checked={category.id === selectedCategory}
            key={category.id}
          >
            <StyledCategoryRadio
              checked={category.id === selectedCategory}
              onChange={selectCategory}
              name="category"
              value={category.id}
              type="checkbox"
              aria-hidden="true"
              tabIndex={-1}
            />
            {category.name}
          </StyledCategoryLabel>
        ))}
      </StyledCategories>
    </StyledSidebar>
  );
}

interface Category {
  id: string;
  name: string;
}

interface SidebarProps {
  categories: Category[];
}

const StyledSidebar = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--bg-2);
  width: min(75vw, 20rem);
  overflow-x: hidden;
`;

const StyledHeading = styled.h1`
  padding: 1.25rem 2rem;
  font-size: var(--fs-xxl);
`;

const StyledCategoryLabel = styled.label`
  display: block;
  color: var(--fg-2);
  cursor: pointer;
  user-select: none;
  line-height: 2.5rem;
  padding: 0 2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: var(--worksans);
  font-weight: 500;
  height: 2.5rem;
  &:hover {
    background-color: var(--bg-3);
    color: var(--fg-1);
  }
  &[aria-checked="true"] {
    background-color: var(--selection);
    font-weight: 600;
    color: var(--fg-1);
  }
`;

const StyledCategories = styled.form``;

const StyledCategoryRadio = styled.input`
  appearance: none;
`;
