import {BUY_CAKE} from '../actions/cakeTypes'


const initialCakeState = {
    numCakes: 10
}

// reducer function
// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numCakes: state.numCakes - (action.payload ? action.payload : 1)
            }
        default:
            return state
    }
}

export default cakeReducer