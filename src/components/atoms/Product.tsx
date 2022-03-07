import { ResultsEntity } from "@services/products/ProductQuery";
import React, { memo } from "react";

function Product(item: ResultsEntity) {
  return (
    <div>
      <p>{item.title}</p>
      <img height="200" width="200" src={item.thumbnail} alt={item.title} />
      <p style={{ fontSize: "0.8rem" }}>
        {item.price}
        {item.currency_id}
      </p>
    </div>
  );
}

export default memo(Product);
