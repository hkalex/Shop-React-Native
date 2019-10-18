/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

import {
    Text
} from 'react-native'

const Root = () => {
    return (
        <Provider store = {store} >
            <App />
        </Provider>
    )
}

export default Root;
