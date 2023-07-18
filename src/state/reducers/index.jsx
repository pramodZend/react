import { combineReducers } from 'redux';
import reducer from './AmountReducer';
import counterReducer from './CounterReducer';

const reducers = combineReducers({
    amount: reducer,
    counters: counterReducer
})

export default reducers;