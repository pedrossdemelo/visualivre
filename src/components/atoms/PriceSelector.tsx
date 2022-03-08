import { useAppDispatch, useAppSelector } from "@store";
import { setPrice } from "@store/search";
import { PriceFilterValue } from "@store/search/types";
import { MoneySend } from "iconsax-react";
import React, { FormEventHandler, useState } from "react";
import styled from "styled-components";
import { StyledLabel } from "./SortSelector";

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

  const handlePriceChange = (target: "min" | "max", value: string) => {
    if (isNaN(Number(value)) && value !== "") return;
    if (target === "min") return setMinPrice(value);
    if (target === "max") return setMaxPrice(value);
  };

  const updatePriceFilter: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (minPrice === "" && maxPrice === "") return dispatch(setPrice([]));

    const min = parseValue(minPrice);
    const max = parseValue(maxPrice);

    if (![min, max].includes("*") && min > max) return setMinPrice("");

    const newPriceFilter: PriceFilterValue = {
      id: `${min}-${max}` as PriceFilterValue["id"],
      name: `${min} - ${max}`,
    };

    dispatch(setPrice([newPriceFilter]));
  };

  return (
    <StyledPriceForm onSubmit={updatePriceFilter}>
      <StyledLabel>Preço:</StyledLabel>
      <StyledInput
        onChange={e => handlePriceChange("min", e.target.value)}
        type="text"
        value={minPrice}
      />
      <StyledSeparator>até</StyledSeparator>
      <StyledInput
        onChange={e => handlePriceChange("max", e.target.value)}
        type="text"
        value={maxPrice}
      />
      <StyledSubmit type="submit">
        <MoneySend size={20} />
      </StyledSubmit>
    </StyledPriceForm>
  );
}

const StyledInput = styled.input`
  max-width: 4rem;
  background-color: transparent;
  display: inline-block;
  border: 2px solid var(--bg-3);
  border-radius: var(--rounded-md);
  color: var(--yellow-2);
  font-size: var(--fs-sm);
  text-align: center;
  height: 1.75rem;
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const StyledSeparator = styled.span`
  display: inline-block;
  font-size: var(--fs-sm);
  color: var(--fg-2);
  margin: 0 0.5rem;
`;

const StyledSubmit = styled.button`
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 1rem;
  cursor: pointer;
`;

const StyledPriceForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function parseValue(value: string): string {
  if (["*", ""].includes(value) || isNaN(Number(value))) return "*";
  return Number(value).toFixed(2).toString();
}
