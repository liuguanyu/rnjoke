'use strict'
import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
} from 'react-native'

import MainPage from './mainpage.js';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        var {navigator} = props;
        setTimeout(() => {
            navigator.replace({ name: 'MainPage', component: MainPage })
        }, 3000);
    }
    render() {
        return(
             <Image source={require('./img/hello.jpg') } style={styles.backimagestyle}/>
        );
    }
}

const styles = StyleSheet.create({
    backimagestyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});