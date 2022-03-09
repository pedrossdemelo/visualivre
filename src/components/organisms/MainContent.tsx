import { Filters, Results } from "@molecules";
import { useCurrentResults } from "hooks";
import React from "react";
import styled from "styled-components";

export default function MainContent() {
  const results = useCurrentResults();

  return (
    <StyledMain>
      <Filters />
      <Results {...results} />
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
