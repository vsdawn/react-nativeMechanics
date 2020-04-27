/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './HomeScreenStyle.js'

const HomeScreen = ({navigation}) => {

  const onHome = () => {
    navigation.navigate("Selection Type")
  }
  return (
    <>
     <View style={styles.mainView}>
      <TouchableOpacity style={styles.mechButton} onPress={onHome}>
        <Text style={styles.mechText}>HomeScreen</Text>
      </TouchableOpacity>
     </View>
    </>
  );
};


export default HomeScreen;
