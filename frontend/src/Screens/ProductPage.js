import React from "react";
import Rating from "../components/Rating";

import data from "../data";

export default function (props) {
  const product = data.products.find((x) => x.id === props.match.params.id);
  if (!product) {
    return <div>Product not found</div>;
  } else
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <img className="large" src={product.image} alt="pic" />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </li>
              <li>
                <h1>${product.price}</h1>
              </li>
              <li>
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">{product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Sattus</div>
                    <div>
                      {product.countInStock ? (
                        <span className="success">Available</span>
                      ) : (
                        <span className="error">Not available</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
