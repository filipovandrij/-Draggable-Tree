import { useState } from "react";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const [scale, setScale] = useState("100%");

  const handleIncrease = () => {
    const options = [
      "25%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
      "125%",
      "150%",
    ];
    const currentIndex = options.indexOf(scale);
    if (currentIndex < options.length - 1) {
      setScale(options[currentIndex + 1]);
    }
  };

  const handleDecrease = () => {
    const options = [
      "25%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
      "125%",
      "150%",
    ];
    const currentIndex = options.indexOf(scale);
    if (currentIndex > 0) {
      setScale(options[currentIndex - 1]);
    }
  };

  return (
    <header>
      <div className="main-logo">
        <span className="logotype">
          Services<span className="logotype-0">O</span>
        </span>
      </div>
      <div className="size-options-box">
        <div className="to-center-options">
          <button className="list-view-btn">LIST VIEW</button>
          <button className="to-center-btn">&oplus;</button>
        </div>
        <div className="scale-options">
          <button className="decrement-btn" onClick={handleDecrease}>
            -
          </button>
          <select
            className="select-scale"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="25%">25%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="100%">100%</option>
            <option value="125%">125%</option>
            <option value="150%">150%</option>
          </select>
          <button className="increment-btn" onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
