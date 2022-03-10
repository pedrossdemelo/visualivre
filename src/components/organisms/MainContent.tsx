import { Filters, Results } from "@molecules";
import React from "react";
import styled from "styled-components";

export default function MainContent() {
  return (
    <StyledMain>
      <Filters />
      <Results />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  flex-grow: 1;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 375px;
  position: relative;
`;
