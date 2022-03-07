import {
  ConditionSelector,
  PriceSelector,
  Search,
  ShippingSelector,
  SortSelector,
} from "@atoms";
import React, { memo } from "react";

function Filters() {
  return (
    <div>
      <Search />
      <SortSelector />
      <ConditionSelector />
      <ShippingSelector />
      <PriceSelector />
    </div>
  );
}

export default memo(Filters);
