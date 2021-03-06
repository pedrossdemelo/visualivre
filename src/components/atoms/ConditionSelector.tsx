import { useAppDispatch, useAppSelector } from "@store";
import { setConditions } from "@store/search";
import { conditionFilters, ConditionFilterValue } from "@store/search/types";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { StyledLabel, StyledSelect, StyledSelectWrapper } from "./SortSelector";

export default function ConditionSelector() {
  const dispatch = useAppDispatch();

  const currentConditionFilters = useAppSelector(
    state => state.search.filters[0].values
  );

  const updateConditionFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "any") return dispatch(setConditions([]));

    const newConditionFilterValueId = e.target
      .value as ConditionFilterValue["id"];

    const newConditionFilter = conditionFilters.find(
      ({ id }) => id === newConditionFilterValueId
    )!;

    dispatch(setConditions([newConditionFilter]));
  };

  return (
    <StyledSelectWrapper>
      <StyledLabel>Condição:</StyledLabel>
      <StyledConditionSelect
        onChange={updateConditionFilter}
        value={
          currentConditionFilters.length > 1
            ? "Qualquer"
            : currentConditionFilters[0]?.id
        }
      >
        <option value="any">Qualquer</option>
        {conditionFilters.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </StyledConditionSelect>
    </StyledSelectWrapper>
  );
}

const StyledConditionSelect = styled(StyledSelect)`
  width: 14ch;
`;
