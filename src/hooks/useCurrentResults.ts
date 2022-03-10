import { useProductsQuery } from "@services/products";
import { useAppSelector } from "@store";
import { Filter } from "@store/search/types";

export default function useCurrentResults(offset?: number) {
  const { query, sort, filters, category } = useAppSelector(
    state => state.search
  );

  const formatFilter = (filter: Filter) => {
    const { id, values } = filter;
    if (!values.length) return "";
    return `&${id}=${values.map(filter => filter.id).join(",")}`;
  };

  const filtersFormatted = filters.map(formatFilter).join("");

  const formattedQuery = encodeURI(
    `q=${query}&sort=${sort.id}${filtersFormatted}${
      category ? `&category=${category}` : ""
    }`
  );

  const { data, isError, isFetching, isSuccess } =
    useProductsQuery(formattedQuery);

  return {
    data: query ? data : null,
    isError,
    isFetching,
    formattedQuery,
    isSuccess,
  };
}
