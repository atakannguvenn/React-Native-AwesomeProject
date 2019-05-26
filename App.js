/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, StatusBar} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double R on your keyboard to reload,\n' +
    'CTRL + M for dev menu',
});

export default class App extends Component {


  render() {
    return (
      <View behavior = "padding" style={styles.container}>
        <StatusBar
          barStyle = "default"
          >
          </StatusBar>
        <Text style={styles.welcome}>Welcome to Atakan's App</Text>
        <Text style={styles.instructions}>But now he needs sleep...</Text>
        <Text style={styles.instructions}>How many hour of sleep do u think he needs?</Text>
        <TextInput 
          style = {styles.input}
          placeholder = "Enter here"
          placeholderTextColor = "#5d7ba0"
          > 
        </TextInput>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttontext}>ENTER</Text>
        </TouchableOpacity>
        <Image source = {{uri: 'https://bit.ly/30My8E3'}} style={{width: 380, height: 200}}></Image>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1eadff',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: "#0068a3"
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  input: {
    color: '#0068a3',
    backgroundColor: '#cce9ff',
    width: 200,
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0068a3',
    paddingVertical: 10,
    marginBottom: 10,
    width: 75,
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  }
});
