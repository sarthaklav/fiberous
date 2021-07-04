// import products from "./data.js";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart";

import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        
      <Navbar />
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
