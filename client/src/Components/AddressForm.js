import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddressForm({ addressDispatch }) {
  const history = useHistory();

  const [name, setName] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [houseNo, setHouseNo] = useState("eg: 1304");
  const [buildingBlockTower, setBuildingBlockTower] = useState();
  const [apartmentColonySociety, setApartmentColonySociety] = useState();
  const [sector, setSector] = useState();
  const [landmark, setLandmark] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();
  function HandleSubmit(event) {
    addressDispatch({
      payload: {
        name: name,
        mobileNumber: mobileNumber,
        houseNo: houseNo,
        buildingBlockTower: buildingBlockTower,
        apartmentColonySociety: apartmentColonySociety,
        sector: sector,
        landmark: landmark,
        city: city,
        state: state,
        pincode: pincode,
      },
    });

    event.preventDefault();
  }
  return (
    <div className="container-form">
      <h3>Add new delivery address</h3>
      <form
        className="form address-form"
        onSubmit={(event) => HandleSubmit(event)}
      >
        <div className="form-item">
          <label className="form-label">Name </label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">Mobile</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setMobileNumber(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label className="form-label">House No</label>
          <input
            className="form-input"
            type="text"
            placeholder={houseNo}
            onChange={(event) => setHouseNo(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label className="form-label">Building/Block/Tower</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setBuildingBlockTower(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">Apartment/ colony name</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setApartmentColonySociety(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label className="form-label">Sector</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setSector(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">Landmark</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setLandmark(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label className="form-label">City name</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">State</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div className="form-item ">
          <label className="form-label">Pincode</label>
          <input
            className="form-input"
            type="number"
            onChange={(event) => setPincode(event.target.value)}
          />
        </div>

        <div className="form-btn">
          <input className="btn btn-light" type="reset" />
          <input className="btn btn-secondary" type="submit" />
        </div>
      </form>
      {/* this will take the user to checkout and payment */}
      <button onClick={() => history.push("/checkout")}>
        Checkout to payment
      </button>
    </div>
  );
}
