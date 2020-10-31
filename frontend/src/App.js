import React from "react";
import Data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Mahyar Kala
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {Data.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer class="row center">All Rights Reserved 2020</footer>
    </div>
  );
}

export default App;
