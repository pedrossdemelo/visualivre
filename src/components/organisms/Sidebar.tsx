import { useAppDispatch, useAppSelector } from "@store";
import { toggleMenu } from "@store/menuOpen";
import { setCategory } from "@store/search";
import { useMediaQuery } from "hooks";
import React, { ChangeEvent, useEffect } from "react";
import styled from "styled-components";

export default function Sidebar({ categories }: SidebarProps) {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.search.category);
  const autoClose = useMediaQuery("(max-width: 1024px)");
  const menuOpen = useAppSelector(state => state.menuOpen);
  const close = () => menuOpen && dispatch(toggleMenu());

  useEffect(() => {
    autoClose && close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoClose]);

  function selectCategory(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value, selectedCategory);
    if (e.target.value === selectedCategory) {
      dispatch(setCategory(""));
      return;
    }
    dispatch(setCategory(e.target.value));
  }

  return (
    <StyledSidebar open={menuOpen}>
      <StyledHeading>🧐 VisuaLivre</StyledHeading>
      <StyledCategoryList role="radiogroup">
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
      </StyledCategoryList>
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

const StyledSidebar = styled.aside<{ open: boolean }>`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  background-color: var(--bg-2);
  width: ${p => (p.open ? "min(80vw, 18.5rem)" : "0")};
  max-height: 100vh;
  overflow-y: hidden;
  will-change: width;
  transition: var(--transition);
  transition-property: width;
`;

const StyledHeading = styled.h1`
  padding: 1.725rem 2rem 1rem;
  height: 5rem;
  font-size: var(--fs-xxl);
  white-space: nowrap;
`;

const StyledCategoryList = styled.form`
  overflow-y: scroll;
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

const StyledCategoryRadio = styled.input`
  appearance: none;
`;
