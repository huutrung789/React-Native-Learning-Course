import {ADD_ADDRESS, SELECT_ADDRESS} from './actionTypes'

export const addPlace = (placeName) => {
    return {
        type: ADD_ADDRESS,
        placeName: placeName
    }
}

export const selectPlace = (place) => {
    return {
        type: SELECT_ADDRESS,
        selectedPlace: place
    }
}
