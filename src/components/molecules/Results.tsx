import { Product } from "@atoms";
import { ResultsEntity } from "@services/products/ProductQuery";
import { useCurrentResults } from "hooks";
import { useScrollToBottom } from "hooks/useScrollToBottom";
import React, { memo, useEffect } from "react";
import styled from "styled-components";

function Results() {
  const [extraResults, setResults] = React.useState<ResultsEntity[]>([]);
  const [offset, setOffset] = React.useState(0);

  const { formattedQuery, data, isError, isFetching } = useCurrentResults();

  const [reachBottomDetector, reachedBottom] = useScrollToBottom();

  useEffect(() => {
    if (!data) return;

    const thereIsMoreData = data.paging.total > offset;

    if (reachedBottom && thereIsMoreData) setOffset(offset + 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachedBottom]);

  useEffect(() => {
    setOffset(0);
    setResults([]);
  }, [formattedQuery]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLB/search?" +
          formattedQuery +
          "&offset=" +
          offset
      );
      const { results: newResults } = await res.json();
      setResults([...extraResults, ...newResults]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  // When there's no data, this means that no query has been made yet.
  if (!data) return <StyledContainer></StyledContainer>;
  // When there's an error, this means that the query failed.
  if (isError) return <StyledContainer>Error</StyledContainer>;
  // When the query is loading
  if (isFetching) return <StyledContainer>Loading...</StyledContainer>;
  // When the query finished but returned no results
  if (!data?.results.length)
    return <StyledContainer>No results</StyledContainer>;

  const results = data.results;

  return (
    <StyledContainer>
      {results.map(product => (
        <Product key={product.id} {...product} />
      ))}
      {extraResults.map(product => (
        <Product key={product.id} {...product} />
      ))}
      <ReachBottomDetector ref={reachBottomDetector} />
    </StyledContainer>
  );
}

const ReachBottomDetector = styled.div`
  height: 50px;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: min-content;
  font-size: var(--fs-xl);
  gap: 0px;
  overflow-y: scroll;
  height: 100%;
  padding: 12.25rem 1.5rem 2rem 2rem;
  @media (max-width: 775px) {
    padding: 12.25rem 0.5rem 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
  @media (max-width: 402px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default memo(Results);
