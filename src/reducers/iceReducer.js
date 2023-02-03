import {BUY_ICE} from '../actions/iceTypes'


const initialIceState = {
    numIce: 20
}

// reducer function
// (previousState, action) => newState
const iceReducer = (state = initialIceState, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                numIce: state.numIce - 1
            }
        default:
            return state
    }
}

export default iceReducer