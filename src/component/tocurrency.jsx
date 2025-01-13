import React, { useContext } from "react";
import { Context } from "../App";

function ToCurrency({ currencies, handleToCurrency, toCurrency }) {
  const { amountOut, setAmountOut } = useContext(Context);

  function handleAmountChange(event) {
    const value = event.target.value;
    if (value > 0) {
      setAmountOut(value);
    } else {
      setAmountOut(""); // Clear input if invalid
    }
  }

  return (
    <div className="currency-input">
      <input
        type="number"
        min="1" /* HTML5 validation to prevent 0 or negative values */
        placeholder="Enter Amount ..."
        value={amountOut || ""}
        onChange={handleAmountChange}
      />
      <select
        className="currency-selector"
        value={toCurrency}
        onChange={(e) => handleToCurrency(e.target.value)}
      >
        {Object.keys(currencies).length > 0 ? (
          Object.keys(currencies).map((tc) => (
            <option value={tc} key={tc}>
              {tc}
            </option>
          ))
        ) : (
          <option>Null</option>
        )}
      </select>
    </div>
  );
}

export default ToCurrency;
