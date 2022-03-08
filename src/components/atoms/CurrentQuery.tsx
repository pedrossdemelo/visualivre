import { useAppSelector } from "@store";
import { HambergerMenu } from "iconsax-react";
import React from "react";
import styled from "styled-components";

export default function CurrentQuery() {
  const currentQuery = useAppSelector(state => state.search.query);

  return (
    <StyledContainer>
      <HambergerMenu style={{ marginRight: "1rem" }} />
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
`;

const StyledCurrentQuery = styled.h1`
  font-size: var(--fs-xxl);
  font-weight: 600;
`;
