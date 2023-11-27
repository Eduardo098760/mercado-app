import React from "react";

import Header from "./components/Hearder/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}
export default App;
