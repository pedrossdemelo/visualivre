import { Product } from "@atoms";
import { ProductQuery } from "@services/products/ProductQuery";
import React, { memo } from "react";
import styled from "styled-components";

function Results({ data, isError, isFetching }: ResultsProps) {
  if (!data) return <div></div>;
  if (isError) return <div>error</div>;
  if (isFetching) return <div>loading</div>;
  if (!data?.results.length) return <div>no results</div>;

  return (
    <StyledContainer>
      {data?.results.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </StyledContainer>
  );
}

interface ResultsProps {
  data?: ProductQuery | null;
  isError: boolean;
  isFetching: boolean;
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: min-content;
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
