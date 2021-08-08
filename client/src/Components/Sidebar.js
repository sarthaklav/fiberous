export function Sidebar({
  viewDispatch,
  sortBy,
  showAllInventory,
  showFastDelivery,
}) {
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
          <h4 className="side-nav-heading">Seasonal </h4>
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
          <h4 className="side-nav-heading">Seasonal </h4>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Winter Fruits
            </label>
          </div>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Winter Veggies
            </label>
          </div>

          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Summer Fruits
            </label>
          </div>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Summer Veggies
            </label>
          </div>
        </div>

        <div>
          <h4 className="side-nav-heading">Price</h4>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Less than Rs.20
            </label>
          </div>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Rs.21 to Rs.50
            </label>
          </div>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Rs.51 to Rs.100
            </label>
          </div>
          <div>
            <label className="float-left">
              <input className="float-left" type="checkbox" />
              Rs.101 to Rs.200
            </label>
          </div>
        </div>
        <div>
          <h4 className="side-nav-heading">Discount</h4>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() =>
                  viewDispatch({
                    type: "TOGGLE_OFFER_FILTER",
                    payload: "fivePercent",
                  })
                }
                checked
              />
              Up to 5%
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() =>
                  viewDispatch({
                    type: "TOGGLE_OFFER_FILTER",
                    payload: "tenPercent",
                  })
                }
                checked
              />
              10% off
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() =>
                  viewDispatch({
                    type: "TOGGLE_OFFER_FILTER",
                    payload: "fifteenPercent",
                  })
                }
                checked
              />
              15% off
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() =>
                  viewDispatch({
                    type: "TOGGLE_OFFER_FILTER",
                    payload: "20",
                  })
                }
                checked
              />
              20% off
            </label>
          </div>
          <div>
            <label className="float-left">
              <input
                className="float-left"
                type="checkbox"
                onChange={() =>
                  viewDispatch({
                    type: "TOGGLE_OFFER_FILTER",
                    payload: "25",
                  })
                }
                checked
              />
              25% off
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
}
