type valueof<T> = T[keyof T];

export const sorts = {
  price_asc: "Menor preço",
  price_desc: "Maior preço",
  relevance: "Mais relevantes",
} as const;

export const conditionFilters = [
  { id: "2230284", name: "Novo" },
  { id: "2230581", name: "Usado" },
  { id: "2230582", name: "Recondicionado" },
] as const;

export const shippingFilters = [{ id: "free", name: "Grátis" }] as const;

export const filters = {
  ITEM_CONDITION: {
    name: "Condição",
    values: conditionFilters,
  },
  shipping_cost: {
    name: "Frete",
    values: shippingFilters,
  },
  price: {
    name: "Preço",
  },
} as const;

export type SortId = keyof typeof sorts;

export type SortName = valueof<typeof sorts>;

export interface Sort {
  id: SortId;
  name: SortName;
}

type UpToFiveDigits = `${number | ""}${number | ""}${number | ""}${
  | number
  | ""}${number}${"." | ""}${number | ""}${number | ""}`;

type PriceFilterValueId = `${UpToFiveDigits | "*"}-${UpToFiveDigits | "*"}`;

export type FilterId = keyof typeof filters;

export type FilterName = typeof filters[FilterId]["name"];

export type ConditionFilterValue =
  typeof filters["ITEM_CONDITION"]["values"][number];

export type ShippingFilterValue =
  typeof filters["shipping_cost"]["values"][number];

export interface PriceFilterValue {
  id: PriceFilterValueId;
  name: string;
}

type FilterValue =
  | PriceFilterValue
  | ConditionFilterValue
  | ShippingFilterValue;

export interface Filter {
  id: FilterId;
  name: FilterName;
  values: FilterValue[];
}

export interface SearchState {
  query: string;
  filters: Filter[];
  sort: Sort;
  offset: number;
  limit: number;
  category: string;
}
