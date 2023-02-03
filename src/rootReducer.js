import {combineReducers} from "redux";
import cakeReducer from "./reducers/cakeReducer";
import iceReducer from "./reducers/iceReducer";
import userReducer from "./reducers/userReducer";

//combine multiple reducers, to be able to pass them to the store
const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer
})

export default rootReducer
