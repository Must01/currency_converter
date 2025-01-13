import React, { useContext } from "react";
import { Context } from "../App";

function FromCurrency({ currencies, handlefromCurrency, fromCurrency }) {
  const { amountIn, setAmountIn } = useContext(Context);

  function handleAmountChange(event) {
    const value = event.target.value;
    if (value > 0) {
      setAmountIn(value);
    } else {
      setAmountIn(""); // Clear input if invalid
    }
  }

  return (
    <div className="currency-input">
      <input
        type="number"
        min="1" /* HTML5 validation to prevent 0 or negative values */
        placeholder="Enter Amount ..."
        value={amountIn || ""}
        onChange={handleAmountChange}
      />
      <select
        className="currency-selector"
        value={fromCurrency}
        onChange={(e) => handlefromCurrency(e.target.value)}
      >
        {Object.keys(currencies).length > 0 ? (
          Object.keys(currencies).map((fc) => (
            <option value={fc} key={fc}>
              {fc}
            </option>
          ))
        ) : (
          <option>Null</option>
        )}
      </select>
    </div>
  );
}

export default FromCurrency;
