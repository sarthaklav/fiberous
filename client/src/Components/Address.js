import { useReducer } from "react";

import { AddressDisplay } from "./AddressDisplay";
import { AddressForm } from "./AddressForm";

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
  const [addresState, addressDispatch] = useReducer(addressReducer, {
    initialAddress,
  });
  return (
    <div>
      <div className="container-address-home">
        <AddressDisplay addresState={addresState} />
        <AddressForm addressDispatch={addressDispatch} />
      </div>
    </div>
  );
}
