import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ViewContainer from './components/ViewContainer'
import { Router, Scene } from 'react-native-router-flux'
import RegionScreen from './scenes/RegionScreen'
import GenderScreen from './scenes/GenderScreen'
import TestScreen from './scenes/TestScreen'
import AgeScreen from './scenes/AgeScreen'

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="root">
          <Scene
            key="RegionScreen"
            component={RegionScreen}
            title="Choose Region"
          />
          <Scene
            key="TestScreen"
            component={TestScreen}
            title="TestScreen"
            initial
          />
          <Scene
            key="GenderScreen"
            component={GenderScreen}
            title="Choose Gender"
          />
          <Scene
            key="AgeScreen"
            component={AgeScreen}
            title="Choose Age"
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#FFFFFF',
},
navBarTitle:{
    color:'#737373'
},
barButtonTextStyle:{
    color:'#737373'
},
barButtonIconStyle:{
    tintColor:'#737373'
},
})

AppRegistry.registerComponent('Smile', () => Smile);
