import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductQuery } from "./ProductQuery";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mercadolibre.com/sites/MLB/",
  }),
  keepUnusedDataFor: 120,
  endpoints: builder => ({
    products: builder.query<ProductQuery, string>({
      query: query => `search?${query}`,
    }),
  }),
});

export const { useProductsQuery } = productsApi;
