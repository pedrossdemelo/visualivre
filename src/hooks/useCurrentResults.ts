import { useProductsQuery } from "@services/products";
import { useAppSelector } from "@store";

export default function useCurrentResults() {
  const { query, sort, filters, category } = useAppSelector(
    state => state.search
  );

  const [conditionFilter, shippingFilter, priceFilter] = filters;

  const formattedQuery = encodeURI(
    `q=${query}&sort=${sort.id}&ITEM_CONDITION=${conditionFilter.values
      .map(filter => filter.id)
      .join(",")}&shipping_cost=${shippingFilter.values
      .map(filter => filter.id)
      .join(",")}&price=${priceFilter.values
      .map(filter => filter.id)
      .join(",")}&category=${category}`
  );

  const { data, isError, isFetching } = useProductsQuery(formattedQuery);

  return {
    data: query ? data : null,
    isError,
    isFetching,
  };
}
