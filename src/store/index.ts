import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@services/products";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { searchReducer } from "./search";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
