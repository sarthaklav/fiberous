export function viewReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_INVENTORY":
      return { ...state, showAllInventory: !state.showAllInventory };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDelivery: !state.showFastDelivery };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((category) => category !== action.payload)
          : [...state.categories, action.payload],
      };
    default:
      return state;
  }
}

export function getSortedData(productList, sortBy) {
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH")
    return productList.sort((a, b) => a["price"] - b["price"]);
  else if (sortBy === "PRICE_HIGH_TO_LOW")
    return productList.sort((a, b) => b["price"] - a["price"]);
  return productList;
}
export function getFilteredProducts(
  sortedProducts,
  { showAllInventory, showFastDelivery, categories }
) {
  return sortedProducts
    .filter(({ inStock }) => (showAllInventory ? true : inStock))
    .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
    .filter(({ category }) => {
      console.log(categories);
      return categories.length !== 0 ? categories.includes(category) : true;
    });
}
