/** @format */

import { Navigation } from 'react-native-navigation'
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

Navigation.registerComponent("app.firstScreen", () => App())

// AppRegistry.registerComponent(appName, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "app.firstScreen"
            }
        }
    })
})
