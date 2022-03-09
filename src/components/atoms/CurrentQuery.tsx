import { useAppDispatch, useAppSelector } from "@store";
import { toggleMenu } from "@store/menuOpen";
import { HambergerMenu } from "iconsax-react";
import React from "react";
import styled from "styled-components";

export default function CurrentQuery() {
  const currentQuery = useAppSelector(state => state.search.query);
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(toggleMenu());

  return (
    <StyledContainer>
      <button onClick={toggle}>
        <HambergerMenu style={{ marginRight: "1rem" }} />
      </button>
      {currentQuery && (
        <StyledCurrentQuery>&ldquo;{currentQuery}&rdquo;</StyledCurrentQuery>
      )}
      {!currentQuery && <StyledCurrentQuery>Produtos</StyledCurrentQuery>}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledCurrentQuery = styled.h1`
  font-size: var(--fs-xxl);
  font-weight: 600;
`;
