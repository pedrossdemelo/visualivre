import { useAppDispatch, useAppSelector } from "@store";
import { setSort } from "@store/search";
import { SortId, sorts } from "@store/search/types";
import React, { ChangeEvent } from "react";

export default function SortSelector() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(state => state.search.sort);

  const updateSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSortId = e.target.value as SortId;
    const newSort = {
      id: newSortId,
      name: sorts[newSortId],
    };
    dispatch(setSort(newSort));
  };

  return (
    <div>
      <select value={currentSort.id} onChange={updateSelect}>
        {Object.entries(sorts).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <select></select>
    </div>
  );
}
