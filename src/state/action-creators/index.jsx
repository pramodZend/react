export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const increment = () => {

    return (dispatch) => {
        dispatch({
            type: 'increment',
        })
    }
}

export const decrement = () => {

    return (dispatch) => {
        dispatch({
            type: 'decrement',
        })
    }
}

export const reset = () => {

    return {
        type: 'reset'
    }
}