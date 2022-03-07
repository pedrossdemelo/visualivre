import { Filters, Results } from "@molecules";
import { useProductsQuery } from "@services/products";
import { useAppSelector } from "@store";
import React from "react";

export default function MainContent() {
  // TODO: extract this to custom hook
  const { query, sort, filters } = useAppSelector(state => state.search);

  const [conditionFilter, shippingFilter, priceFilter] = filters;

  const formattedQuery = encodeURI(
    `q=${query}&sort=${sort.id}&ITEM_CONDITION=${conditionFilter.values
      .map(filter => filter.id)
      .join(",")}&shipping_cost=${shippingFilter.values
      .map(filter => filter.id)
      .join(",")}&price=${priceFilter.values
      .map(filter => filter.id)
      .join(",")}`
  );

  console.log(formattedQuery);

  const { data, isError, isFetching } = useProductsQuery(formattedQuery);

  return (
    <main>
      <Filters />
      <Results
        data={query ? data : null}
        isError={isError}
        isFetching={isFetching}
      />
    </main>
  );
}
