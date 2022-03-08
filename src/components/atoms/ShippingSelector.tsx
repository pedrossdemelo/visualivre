import { useAppDispatch, useAppSelector } from "@store";
import { setShipping } from "@store/search";
import { shippingFilters, ShippingFilterValue } from "@store/search/types";
import React, { ChangeEvent } from "react";
import { StyledLabel, StyledSelect, StyledSelectWrapper } from "./SortSelector";

export default function ShippingSelector() {
  const dispatch = useAppDispatch();

  const currentShippingFilters = useAppSelector(
    state => state.search.filters[1].values
  );

  const updateShippingFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "any") return dispatch(setShipping([]));

    const newShippingFilterValueId = e.target
      .value as ShippingFilterValue["id"];

    const newShippingFilter = shippingFilters.find(
      ({ id }) => id === newShippingFilterValueId
    )!;

    dispatch(setShipping([newShippingFilter]));
  };

  return (
    <StyledSelectWrapper>
      <StyledLabel>Frete:</StyledLabel>
      <StyledSelect
        onChange={updateShippingFilter}
        value={
          currentShippingFilters.length < 1
            ? "Qualquer"
            : currentShippingFilters[0].id
        }
      >
        <option value="any">Qualquer</option>
        {shippingFilters.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
}
