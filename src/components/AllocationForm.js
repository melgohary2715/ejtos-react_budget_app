import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "./AllocationForm.css";

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const submitEvent = () => {
        const numericCost = parseFloat(cost);
        if (isNaN(numericCost)) {
            alert("Please enter a valid number for the allocation.");
            return;
        }
        if (numericCost > remaining) {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
            return;
        }

        const expense = {
            name: name,
            cost: numericCost,
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
        
        // Clear form
        setName('');
        setCost('');
    };

    return (
        <div className='row'>
            <div className="input-group mb-3">
                <div className='input-title'>
                    Change Allocation
                </div>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" value={name} onChange={(e) => setName(e.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Admin">Admin</option>
                </select>

                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Action</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02" value={action} onChange={(e) => setAction(e.target.value)}>
                    <option value="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>

                <div className="input-group-prepend">
                    <span className="input-group-text">{currency}</span>
                </div>
                <input
                    required
                    type='text'
                    className='form-control'
                    id='cost'
                    value={cost}
                    placeholder='Amount'
                    onChange={(e) => {
                        const re = /^[0-9]*(\.[0-9]*)?$/;
                        if (e.target.value === '' || re.test(e.target.value)) {
                            setCost(e.target.value);
                        }
                    }}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={submitEvent}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
