import {ADD_ADDRESS, SELECT_ADDRESS} from '../actions/actionTypes'

const initialState = {
    selectedPlace: null,
    places: []
}

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                places: state.places.concat({name: action.placeName, key: Math.random().toString()})
            }
        case SELECT_ADDRESS: 
            return {
                ...state,
                selectedPlace: action.selectedPlace
            }
        default:
            return state; //unchange
    }
}

export default placeReducer