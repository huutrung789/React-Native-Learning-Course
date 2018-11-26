import { createStore, combineReducers } from 'redux'
import placesReducer from './reducers/places'

const rootReducer = combineReducers({
    places: placesReducer
})

const configureReducer = () => {
    return createStore(rootReducer)
}

export default configureReducer