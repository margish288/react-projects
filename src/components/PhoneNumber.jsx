import React, { useState } from "react";

const PhoneNumber = () => {
  // your code here
  const [number, setNumber] = useState(0);

  const updateNumber = (e) => {
    const isEscPressed = e.keyCode === 8;
    const value = e.target.value;

    const arr = value.split("");

    if (arr.length < 14) {
      if (arr.length > 3 && arr[0] !== "(") {
        arr.unshift("(");
      }

      if (arr[0] === "(" && arr[4] !== ")") {
        arr[4] = ")";
      }

      if (arr.length > 7) {
        arr[8] = "-";
      }

      if (arr.length === 9 && isEscPressed) {
        arr.pop();
      }

      if (arr.length === 5 && isEscPressed) {
        arr.pop();
        arr.shift();
      }
      setNumber(arr.join(""));
    }
  };

  return (
    <input
      value={number}
      onChange={updateNumber}
      onKeyDown={updateNumber}
      data-testid='phone-number-input'
    />
  );
};

export default PhoneNumber;
