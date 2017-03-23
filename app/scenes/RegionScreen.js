import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


import { Actions } from 'react-native-router-flux'

export default class RegionScreen extends Component {
  render() {
    return (
      <View style={styles.splitContainer}>
        <Image style={styles.splitHalf}
        source={require('../../images/bg1.png')}
        resizeMode={Image.resizeMode.cover}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >Africa</Text>
        </Image>
        <Image style={styles.splitHalf}
        source={require('../../images/bg2.png')}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >East Asia and Pacific</Text>
        </Image>
        <Image style={styles.splitHalf}
        source={require('../../images/bg3.png')}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >Europe and Central Asia</Text>
        </Image>
        <Image style={styles.splitHalf}
        source={require('../../images/bg4.png')}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >Latin America and Caribbean</Text>
        </Image>
        <Image style={styles.splitHalf}
        source={require('../../images/bg5.png')}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >Middle East and North Africa</Text>
        </Image>
        <Image style={styles.splitHalf}
        source={require('../../images/bg6.png')}>
          <Text
          style={styles.splitText}
          onPress={() => Actions.GenderScreen()}
          >South Asia</Text>
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  splitHalf: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  splitContainer: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  splitText: {
    fontFamily: 'Avenir-Medium',
    color: 'white',
    fontSize: 22,
    fontWeight: "800"
  }
})
