
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Address } from "./Components/Address";
import { Home } from "./Components/Home";
import { NoMatch } from "./Components/NoMatch";
import { ProductDetails } from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
        
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
