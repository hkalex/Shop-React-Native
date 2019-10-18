/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import React from 'react';
import {
    Text,
    Navigator,
    View,
    StatusBar,
    Platform
} from 'react-native';

import Splash from './pages/Splash';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <Navigator
                initialRoute={{name: 'Splash', component: Splash}}
                configureScene={()=>{
                    return  Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component navigator = {navigator} route = {route} {...route.passProps} />
                    )
                }}
            />
        </View>
    )
}

export default App;