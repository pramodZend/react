import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counters);
    const { increment, decrement, reset } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h2>Counter:{counter}</h2>
            <button className='btn btn-primary mx-2' onClick={() => increment()}>Increment</button>
            <button className='btn btn-primary mx-2' onClick={() => decrement()}>Decrement</button>
            <button className='btn btn-primary mx-2' onClick={() => dispatch(reset())}>Reset</button>
        </div>

    )
}
export default Counter;