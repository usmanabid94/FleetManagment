/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,Text
} from 'react-native';
import Router from './Source/Router/Router';
const App = () => {
return (
  <>
      <SafeAreaView style={{ backgroundColor: 'red'}}/>
        <StatusBar barStyle="dark-content"
          backgroundColor={'green'}
        />
        <Router/>
        {/* <View>
          <Text>App.js</Text>
        </View> */}
        </>
        );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
