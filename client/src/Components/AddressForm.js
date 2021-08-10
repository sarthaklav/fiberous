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
      <form className="form" onSubmit={(event) => HandleSubmit(event)}>
        <div className="form-item">
          <label>Name </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Mobile</label>
          <input
            type="text"
            onChange={(event) => setMobileNumber(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label>House No</label>
          <input
            type="text"
            placeholder={houseNo}
            onChange={(event) => setHouseNo(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label>Building/Block/Tower</label>
          <input
            type="text"
            onChange={(event) => setBuildingBlockTower(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Apartment/ colony name</label>
          <input
            type="text"
            onChange={(event) => setApartmentColonySociety(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label>Sector</label>
          <input
            type="text"
            onChange={(event) => setSector(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Landmark</label>
          <input
            type="text"
            onChange={(event) => setLandmark(event.target.value)}
          />
        </div>

        <div className="form-item">
          <label>City name</label>
          <input
            type="text"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label>State</label>
          <input
            type="text"
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div className="form-item ">
          <label>Pincode</label>
          <input
            type="number"
            onChange={(event) => setPincode(event.target.value)}
          />
        </div>

        <div className="form-btn">
          <input className="input-btn  btn-light" type="reset" />
          <input className="input-btn  btn-secondary" type="submit" />
        </div>
      </form>
      {/* this will take the user to checkout and payment */}
      <button onClick={() => history.push("/checkout")}>
        Checkout to payment
      </button>
    </div>
  );
}
