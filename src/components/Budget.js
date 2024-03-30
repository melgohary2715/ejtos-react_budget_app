// Budget.js
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget.toString());

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const updateBudget = () => {
    dispatch({
      type: 'SET_BUDGET',
      payload: parseFloat(newBudget),
    });
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{currency}</span>
      </div>
      <input
        type="text"
        className="form-control"
        value={newBudget}
        onChange={handleBudgetChange}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={updateBudget}>
          Update Budget
        </button>
      </div>
    </div>
  );
};

export default Budget;
