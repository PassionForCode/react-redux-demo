import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        info: 'Fetch Users Request'
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// async action creator - returns a function that uses the 'pure' action creator methods to dispatch the state to the redux store
export function fetchUsers() {
    return function (dispatch) {
        console.log('fetchUsers')
        dispatch(fetchUsersRequest())
        fetch("https://jsonplaceholder.typicode.com/users").then(async response => {
                //response.data contains user date
                const users = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.status;
                    return Promise.reject(error);
                }

                dispatch(fetchUsersSuccess(users))
            }
        ).catch(error => {
                // error.message is the error description from API
                dispatch(fetchUsersFailure(error))
            }
        )
        /*
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                //response.data contains user date
                dispatch(fetchUsersSuccess(response.data.map(user => user.id)))
            }).catch(error => {
            // error.message is the error description from API
            dispatch(fetchUsersFailure(error.message))
        })

         */

    }
}