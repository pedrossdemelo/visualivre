import React from "react";
import styled from "styled-components";

interface Category {
  id: string;
  name: string;
}

export function Sidebar({ categories }: { categories: Category[] }) {
  return (
    <Styled.Sidebar>
      <Styled.Header>VisuaLivre</Styled.Header>
      <Styled.Nav>
        <ul>
          {categories.slice(0, -1).map(category => (
            <Styled.NavItem key={category.id}>{category.name}</Styled.NavItem>
          ))}
        </ul>
      </Styled.Nav>
    </Styled.Sidebar>
  );
}

const Styled = {
  Sidebar: styled.aside`
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--bg-2);
    width: min(75vw, 17rem);
    overflow-x: hidden;
  `,

  Header: styled.h1`
    font-size: var(--fs-xxl);
  `,

  Nav: styled.nav`
    display: flex;
    flex-flow: col wrap;
  `,

  NavItem: styled.li``,
};
