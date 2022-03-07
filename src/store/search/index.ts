import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";
import {
  ConditionFilterValue,
  PriceFilterValue,
  SearchState,
  ShippingFilterValue,
  Sort,
} from "./types";

const initialState: SearchState = {
  query: "",
  filters: [
    {
      id: "ITEM_CONDITION",
      name: "Condição",
      values: [
        { id: "2230284", name: "Novo" },
        { id: "2230581", name: "Usado" },
        { id: "2230582", name: "Recondicionado" },
      ],
    },
    {
      id: "shipping_cost",
      name: "Frete",
      values: [],
    },
    {
      id: "price",
      name: "Preço",
      values: [],
    },
  ],
  sort: {
    id: "relevance",
    name: "Mais relevantes",
  },
  category: "",
  offset: 0,
  limit: 50,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setPrice: (state, { payload }: PayloadAction<PriceFilterValue[]>) => {
      state.filters[2].values = payload;
    },
    setShipping: (state, { payload }: PayloadAction<ShippingFilterValue[]>) => {
      state.filters[1].values = payload;
    },
    setConditions: (
      state,
      { payload }: PayloadAction<ConditionFilterValue[]>
    ) => {
      state.filters[0].values = payload;
    },
    setSort: (state, { payload }: PayloadAction<Sort>) => {
      state.sort = payload;
    },
    setOffset: (state, { payload }: PayloadAction<number>) => {
      state.offset = payload;
    },
    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload;
    },
  },
});

const search = (state: RootState) => state.search;

export const {
  setPrice,
  setConditions,
  setShipping,
  setOffset,
  setQuery,
  setSort,
  setCategory,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export default search;
