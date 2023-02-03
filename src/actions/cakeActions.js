import {BUY_CAKE} from './cakeTypes'


// pure action creator
// Action creators
export const buyCake = (noOfCakes = 1) => {
    return {
        type: BUY_CAKE,
        payload: noOfCakes
    }
}

/*
// async
export const buyCake = () => {
    return function (dispatch) {
        console.log('calling Action creator buy cake')
    }
}*/