import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "../actions/userTypes";

const initialState = {
    loading: false,
    users: [
        {
            id: 'Initial User 1',
            name: 'Leanne Graham'
        },
        {
            id: 'Initial User 2',
            name: 'Max Mueller'
        }
    ],
    error: 'Press Fetch Button'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_USERS_REQUEST:
            // call API
            return {
                ...state,
                loading: true,
                users: [],
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            // fill result data into state object
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''

            }
        case FETCH_USERS_FAILURE:
            // fill error message into state object
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer