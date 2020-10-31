import React from "react";
import Data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            Mahyar Kala
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {Data.products.map((product) => (
            <div key={product.id} className="card">
              <a href="product.html">
                <img className="medium" src={product.image} alt="pic" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer class="row center">All Rights Reserved 2020</footer>
    </div>
  );
}

export default App;
