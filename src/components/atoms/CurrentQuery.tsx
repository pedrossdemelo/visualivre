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
      <HamburgerButton onClick={toggle}>
        <HambergerMenu style={{ marginRight: "1rem" }} />
      </HamburgerButton>
      {currentQuery && (
        <StyledCurrentQuery>&ldquo;{currentQuery}&rdquo;</StyledCurrentQuery>
      )}
      {!currentQuery && (
        <StyledCurrentQuery>Pesquise no VisuaLivre</StyledCurrentQuery>
      )}
    </StyledContainer>
  );
}

const HamburgerButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.75rem 2rem 0;
  @media (max-width: 775px) {
    padding: 0.75rem 1rem 0;
    height: 3rem;
  }
`;

const StyledCurrentQuery = styled.h1`
  font-size: var(--fs-xxl);
  font-weight: 600;
  @media (max-width: 775px) {
    font-size: var(--fs-xl);
  }
`;
