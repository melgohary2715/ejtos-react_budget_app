// ExpenseItem.js
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const changeAllocation = (amount) => {
        dispatch({
            type: 'CHANGE_EXPENSE',
            payload: {
                id: props.id,
                cost: amount
            }
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
            <button className="change-allocation-btn increase" onClick={() => changeAllocation(10)}>+</button>
            </td>
            <td>
            <button className="change-allocation-btn decrease" onClick={() => changeAllocation(-10)}>-</button>

            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
