import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux'

export default class AgeScreen extends Component {
  render() {
    return (
        <View style={styles.genderContainer}>
          <View style={styles.splitHalf}>
            <Text
            style={styles.splitText}
            onPress={() => Actions.GenderScreen()}
            >Greater than SIX</Text>

          </View>
          <View style={styles.splitHalfTwo}>
            <Text
            style={styles.splitText}
            onPress={() => Actions.GenderScreen()}
            >Less than SIX</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  genderContainer: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  splitHalf: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#aececf'
  },
  splitHalfTwo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd1dc',
    width: '100%'
  },
  splitText: {
    color: 'white',
    fontSize: 50
  }
})
