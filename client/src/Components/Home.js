import { useState } from "react";
import veggie1 from "../images/veggie1.jpeg";
import veggie2 from "../images/veggie4.jpeg";
import veggie3 from "../images/veggie3.jpeg";

const images = [veggie1, veggie2, veggie3];
export function Home() {
  const [index, setIndex] = useState(1);
  function decrementIndex() {
    if (index === 0) {
      console.log("clicked when index is 0");
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function incrementIndex() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="container-home">
      <div className="slide-show">
        <button className="swipe-left" onClick={() => decrementIndex()}>
          <span>&#8592;</span>
        </button>
        <img
          src={images[index]}
          alt=""
          style={{ width: "750px", height: "450px", margin: "auto" }}
        />
        <button className="swipe-right" onClick={() => incrementIndex()}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
