import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class StatusbarBackground extends Component {
  render() {
    return (
      <View style={styles.StatusbarBackground}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StatusbarBackground: {
    height: 20
  }
})
