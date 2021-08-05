import { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

const initialAddress = [
  {
    id: 1,
    name: "Sarthak",
    mobileNumber: "7023511335",
    nickName: "home",
    houseNo: 1304,
    buildingBlockTower: "Tower 28",
    apartmentColonySociety: "Paras tierea",
    sector: "sector 137",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201305,
  },
  {
    id: 2,
    name: "Sarthak",
    mobileNumber: "7023511335",
    nickName: "home",
    houseNo: 1304,
    buildingBlockTower: "Tower 28",
    apartmentColonySociety: "Paras tierea",
    sector: "sector 137",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201305,
  },
  {
    id: 3,
    name: "Sarthak",
    mobileNumber: "7023511335",
    nickName: "home",
    houseNo: 1304,
    buildingBlockTower: "Tower 28",
    apartmentColonySociety: "Paras tierea",
    sector: "sector 137",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201305,
  },
  {
    id: 4,
    name: "Sarthak",
    mobileNumber: "7023511335",
    nickName: "home",
    houseNo: 1304,
    buildingBlockTower: "Tower 28",
    apartmentColonySociety: "Paras tierea",
    sector: "sector 137",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201305,
  },
];
function addressReducer(state, action) {
  return {
    ...state,
    initialAddress: [...state.initialAddress, action.payload],
  };
}

export function Address() {
  const history = useHistory();
  const [addresState, dispatch] = useReducer(addressReducer, {
    initialAddress,
  });
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
    dispatch({
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
    <div>
      <div className="container-address-home">
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
                onChange={(event) =>
                  setApartmentColonySociety(event.target.value)
                }
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
      </div>
    </div>
  );
}
