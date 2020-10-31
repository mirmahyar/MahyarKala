import React from "react";
import Rating from "./Rating";

function product(props) {
  const { product } = props;
  return (
    <div key={product.id} className="card">
      <a href="product.html">
        <img className="medium" src={product.image} alt="pic" />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default product;
