import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Screens/HomePage";
import ProductPage from "./Screens/ProductPage";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
        </main>

        <footer class="row center">All Rights Reserved 2020</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
