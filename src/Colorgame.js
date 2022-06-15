import { useState } from "react";
import "./Colorgame.css";

export function Addcolor() {
  const [color, setColor] = useState("deepskyblue");
  const styles = {
    background: color || "deepskyblue",
  };
  const primary = ["red", "orange", "yellow"];
  const [ColorList, setColorList] = useState(primary);
  return (
    <div>
      <div className="input-box">
        <input
          value={color}
          style={styles}
          onChange={(event) => {
            setColor(event.target.value);
          }}
          type="text"
          placeholder="enter the value"
        ></input>
        <button
          onClick={() => {
            setColorList([...ColorList, color]);
          }}
        >
          ADD COLOR
        </button>
      </div>
      {ColorList.map((ele, index) => (
        <BarColor key={index} color={ele} />
      ))}
    </div>
  );
}

export function BarColor({ color }) {
  const styles = {
    background: color,
    margin: "10px",
    width: "100px",
    height: "10px",
  };

  return (
    <div>
      <div className="bar" style={styles}></div>
    </div>
  );
}
