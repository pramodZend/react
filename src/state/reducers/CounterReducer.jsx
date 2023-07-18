const counterReducer = (state = 1, action) => {
    console.log("state", state);
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state
    }
}
export default counterReducer;