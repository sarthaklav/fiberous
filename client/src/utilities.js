export function viewReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_INVENTORY":
      return { ...state, showAllInventory: !state.showAllInventory };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDelivery: !state.showFastDelivery };
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
  { showAllInventory, showFastDelivery }
) {
  return sortedProducts
    .filter(({ inStock }) => (showAllInventory ? true : inStock))
    .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
}
