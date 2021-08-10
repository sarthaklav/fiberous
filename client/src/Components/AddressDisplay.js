export function AddressDisplay({ addresState }) {
  return (
    <div className="container-address">
      {addresState.initialAddress.map((addressItem) => {
        return (
          <div key={addressItem.id}>
            <ul className="address-box-item">
              <li className="address-box-pill">
                <b>{addressItem.name}</b>
              </li>
              <li className="address-box-pill">{addressItem.houseNo}</li>
              <li className="address-box-pill">
                {addressItem.buildingBlockTower}
              </li>
              <li className="address-box-pill">
                {addressItem.apartmentColonySociety}
              </li>
              <li className="address-box-pill">{addressItem.sector}</li>
              <li className="address-box-pill">{addressItem.city}</li>
              <li className="address-box-pill">{addressItem.state}</li>
              <li className="address-box-pill">{addressItem.pincode}</li>
            </ul>
            <div className="address-box-links">
              <div>
                <button className="link link-primary link-address">
                  Deliver to this address
                </button>
              </div>
              <div className="address-box-links-2">
                <button className="link link-secondary link-address link-edit">
                  Edit
                </button>
                <button className="link link-secondary link-address link-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
