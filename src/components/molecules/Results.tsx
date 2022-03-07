import { Product } from "@atoms";
import { ProductQuery } from "@services/products/ProductQuery";
import React, { memo, useEffect, useRef } from "react";

function Results({ data, isError, isFetching }: ResultsProps) {
  const rerenders = useRef(0);
  useEffect(() => {
    rerenders.current++;
  });

  if (!data) return <div>no search</div>;
  if (isError) return <div>error</div>;
  if (isFetching) return <div>loading</div>;
  if (!data?.results.length) return <div>no results</div>;

  return (
    <div>
      {rerenders.current}
      {data?.results.map(item => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}

interface ResultsProps {
  data?: ProductQuery | null;
  isError: boolean;
  isFetching: boolean;
}

export default memo(Results);
