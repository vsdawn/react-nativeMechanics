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
import styles from './UserSelectionStyle.js'

const UserSelection = ({navigation}) => {

  const onMechanics = () => {
    console.log("this is mechanics")
    navigation.navigate("Mechanic", {name:"mechanics"})
  }
  const onCustomer = () => {
    console.log("this is Customer")
    navigation.navigate("Customer", {name:"customer"})
  }
  return (
    <>
     <View style={styles.mainView}>
      <TouchableOpacity style={styles.mechButton} onPress={onMechanics}>
        <Text style={styles.mechText}>Mechanics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.custButton} onPress={onCustomer}>
        <Text style={styles.custText}>Customer</Text>
      </TouchableOpacity>
     </View>
    </>
  );
};


export default UserSelection;
