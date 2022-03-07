import React from "react";
import styled from "styled-components";

export default function Sidebar({ categories }: SidebarProps) {
  return (
    <Styled.Sidebar>
      <Styled.Heading>VisuaLivre</Styled.Heading>
      <Styled.CategoryList>
        {categories.slice(0, -1).map(category => (
          <Styled.CategoryItem key={category.id}>
            {category.name}
          </Styled.CategoryItem>
        ))}
      </Styled.CategoryList>
    </Styled.Sidebar>
  );
}

interface Category {
  id: string;
  name: string;
}

interface SidebarProps {
  categories: Category[];
}

const Styled = {
  Sidebar: styled.aside`
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--bg-2);
    width: min(75vw, 17rem);
    overflow-x: hidden;
  `,

  Heading: styled.h1`
    font-size: var(--fs-xxl);
  `,

  CategoryList: styled.ul``,

  CategoryItem: styled.li``,
};
