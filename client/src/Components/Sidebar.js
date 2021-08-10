export function Sidebar({
  viewDispatch,
  sortBy,
  showAllInventory,
  showFastDelivery,
  categories,
}) {
  const AllShownCategories = ["Fruits", "Vegetables"];
  return (
    <div className="side-nav">
      <aside className="">
        <div>
          <h4 className="side-nav-heading">Sort by</h4>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="radio"
                name="sort"
                onChange={() =>
                  viewDispatch({
                    type: "SORT",
                    payload: "PRICE_LOW_TO_HIGH",
                  })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
              Price-Low to high
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="radio"
                name="sort"
                onChange={() =>
                  viewDispatch({
                    type: "SORT",
                    payload: "PRICE_HIGH_TO_LOW",
                  })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
              Price-High to low
            </label>
          </div>
        </div>
        <div>
          <h4 className="side-nav-heading">Filter By </h4>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() => viewDispatch({ type: "TOGGLE_INVENTORY" })}
                checked={showAllInventory}
              />
              Include Out of Stock
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                checked={showFastDelivery}
                onChange={() => viewDispatch({ type: "TOGGLE_DELIVERY" })}
              />
              Fast Delivery
            </label>
          </div>
        </div>
        <div>
          <h4 className="side-nav-heading">Category </h4>

          {AllShownCategories.map((category) => (
            <div key={category}>
              <label className="float-left">
                <input
                  className="float-left"
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={() =>
                    viewDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: category,
                    })
                  }
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
