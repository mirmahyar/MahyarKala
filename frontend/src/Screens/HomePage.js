import React from "react";
import Product from "../components/Product";
import Data from "../data";

export default function () {
  return (
    <div className="row center">
      {Data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
