import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';


export const Shop = () => {

    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const counter = useSelector(state => state.counters);
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h2>Buy Shop</h2>
            <button className='btn btn-primary mx-2' onClick={() => depositMoney(100)}>+</button>
            My Balance:{balance} Rs. Counter:{counter}
            <button className='btn btn-primary mx-2' onClick={() => withdrawMoney(100)}>-</button>
        </div>
    )
}
