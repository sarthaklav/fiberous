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
      <div style={{ display: "flex" }}>
        {addresState.initialAddress.map((addressItem) => {
          return (
            <div key={addressItem.id} style={{ border: "1px solid black" }}>
              <h4>{addressItem.nickName}</h4>
              <p>Name:{addressItem.name}</p>
              <p>Mobile:{addressItem.mobileNumber}</p>
              <p>House/Flat No:{addressItem.houseNo}</p>
              <p>Building/Block/Tower:{addressItem.buildingBlockTower}</p>
              <p>
                Apartment/Colony/Society{addressItem.apartmentColonySociety}
              </p>
              <p>Sector:{addressItem.sector}</p>
              <p>City:{addressItem.city}</p>
              <p>State:{addressItem.state}</p>
              <p>PIN:{addressItem.pincode}</p>
            </div>
          );
        })}
      </div>
      <div className="container-form">
        <h3>Deleivery Address</h3>
        <form className="form" onSubmit={(event) => HandleSubmit(event)}>
          <div className="form-row">
            <div className="form-row-item fourty-percent">
              <label>Name </label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-row-item sixty-percent">
              <label>Mobile</label>
              <input
                type="text"
                onChange={(event) => setMobileNumber(event.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-item thirty-percent">
              <label>House No</label>
              <input
                type="text"
                placeholder={houseNo}
                onChange={(event) => setHouseNo(event.target.value)}
              />
            </div>

            <div className="form-row-item thirty-percent">
              <label>Building/Block/Tower</label>
              <input
                type="text"
                onChange={(event) => setBuildingBlockTower(event.target.value)}
              />
            </div>
            <div className="form-row-item fourty-percent">
              <label>Apartment/ colony name</label>
              <input
                type="text"
                onChange={(event) =>
                  setApartmentColonySociety(event.target.value)
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-item fourty-percent">
              <label>Sector</label>
              <input
                type="text"
                onChange={(event) => setSector(event.target.value)}
              />
            </div>
            <div className="form-row-item sixty-percent">
              <label>Landmark</label>
              <input
                type="text"
                onChange={(event) => setLandmark(event.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-item sixty-percent">
              <label>City name</label>
              <input
                type="text"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="form-row-item sixty-percent">
              <label>State</label>
              <input
                type="text"
                onChange={(event) => setState(event.target.value)}
              />
            </div>
            <div className="form-row-item fourty-percent">
              <label>Pincode</label>
              <input
                type="number"
                onChange={(event) => setPincode(event.target.value)}
              />
            </div>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        {/* this will take the user to checkout and payment */}
        <button onClick={() => history.push("/checkout")}>
          Checkout to payment
        </button>
      </div>
    </div>
  );
}
