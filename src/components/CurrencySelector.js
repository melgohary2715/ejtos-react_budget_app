// CurrencySelector.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./CurrencySelector.css";

const CurrencySelector = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    // Assuming the event value is like "£"
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value
    });
  };

  return (
    <div>
      <label htmlFor="currency-select">Currency:</label>
      <select id="currency-select" onChange={handleChange} className="currency-selector">
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
