import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux'
import configureReducer from './store/configureStore'

const store = configureReducer()
const RNRedux = () => {
    return (<Provider store = {store}>
                 <App />
            </Provider>
        )
}


AppRegistry.registerComponent(appName, () => RNRedux);