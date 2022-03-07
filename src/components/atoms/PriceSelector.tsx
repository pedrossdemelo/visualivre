import { useAppDispatch, useAppSelector } from "@store";
import { setPrice } from "@store/search";
import { PriceFilterValue } from "@store/search/types";
import React, { FormEventHandler, useState } from "react";

export default function PriceSelector() {
  const dispatch = useAppDispatch();

  const currentPriceFilter = useAppSelector(
    state => state.search.filters[2].values[0]?.id
  );

  const [initialMin, initialMax] = currentPriceFilter
    ? currentPriceFilter.split("-").map(n => (n === "*" ? "" : n))
    : ["", ""];

  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  const updatePriceFilter: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const min = parseValue(minPrice);
    const max = parseValue(maxPrice);

    if (![min, max].includes("*") && min > max)
      return void setMinPrice("") || setMaxPrice("");

    const newPriceFilter: PriceFilterValue = {
      id: `${min}-${max}` as PriceFilterValue["id"],
      name: `${min} - ${max}`,
    };

    dispatch(setPrice([newPriceFilter]));
  };

  return (
    <form onSubmit={updatePriceFilter}>
      <input
        onChange={e => setMinPrice(e.target.value)}
        type="number"
        value={minPrice}
      />
      <input
        onChange={e => setMaxPrice(e.target.value)}
        type="number"
        value={maxPrice}
      />
      <button type="submit">Filtrar Preco</button>
    </form>
  );
}

function parseValue(value: string): string {
  if (["*", ""].includes(value) || isNaN(Number(value))) return "*";
  return Number(value).toFixed(2).toString();
}
