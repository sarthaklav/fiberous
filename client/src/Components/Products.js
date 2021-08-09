import { Sidebar } from "./Sidebar";
import { ProductCard } from "./ProductCard";
import products from "../data";
import { viewReducer, getSortedData, getFilteredProducts } from "../utilities";
import { useReducer } from "react";
export function Products() {
  const [{ sortBy, showAllInventory, showFastDelivery }, viewDispatch] =
    useReducer(viewReducer, {
      sortBy: null,
      showAllInventory: true,
      showFastDelivery: false,
    });
  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredProducts(sortedProducts, {
    showAllInventory,
    showFastDelivery,
  });
  return (
    <>
      <div className="products-page">
        <Sidebar
          viewDispatch={viewDispatch}
          sortBy={sortBy}
          showAllInventory={showAllInventory}
          showFastDelivery={showFastDelivery}
        />
        <div className="container-products">
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
