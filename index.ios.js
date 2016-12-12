/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    Navigator
} from 'react-native';

import SplashScreen from './splash.js'

export default class joke extends Component {
    render() {
        var defaultComponent = SplashScreen;
        return (
          <Navigator
              initialRoute={{ name: 'Splash', component: defaultComponent }}
              configureScene={(route) => {
                  return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
              } }
              renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component {...route.params} navigator={navigator} />
              } }
              />
        );
    }
}

AppRegistry.registerComponent('joke', () => joke);