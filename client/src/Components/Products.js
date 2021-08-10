import { Sidebar } from "./Sidebar";
import { ProductCard } from "./ProductCard";
import products from "../data";
import { viewReducer, getSortedData, getFilteredProducts } from "../utilities";
import { useReducer } from "react";
export function Products() {
  const [
    { sortBy, showAllInventory, showFastDelivery, categories },
    viewDispatch,
  ] = useReducer(viewReducer, {
    sortBy: null,
    showAllInventory: true,
    showFastDelivery: false,
    categories: ["Fruits", "Vegetables"],
  });
  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredProducts(sortedProducts, {
    showAllInventory,
    showFastDelivery,
    categories,
  });
  return (
    <>
      <div className="products-page">
        <Sidebar
          viewDispatch={viewDispatch}
          sortBy={sortBy}
          showAllInventory={showAllInventory}
          showFastDelivery={showFastDelivery}
          categories={categories}
        />
        <div className="container-products">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
