// In App.js in a new project

import * as React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import "react-native-gesture-handler";
// import Orientation from "react-native-orientation";
// import { isTablet } from "react-native-device-info";
import EStyleSheet from "react-native-extended-stylesheet";
// import  Drawernav from "./Navigators/AppNavigator";
// import CustomerDetails from './Containers/Calls/CustomerDetails'
// import OpenCallDetails from './Containers/Calls/OpenCallDetails'
import UserSelection from './Components/UserSelection'
import HomeScreen from "./Container/HomeScreen/HomeScreen";
import CustomerForm from "./Container/MechCustLoginForm/CustomerForm";
import MechanicForm from "./Container/MechCustLoginForm/MechanicForm";



const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const entireScreenWidth = Dimensions.get("window").width;

// if (isTablet()) {
//   _orientationDidChange(initial);
//   Orientation.addOrientationListener(_orientationDidChange);
// } else {
//   Orientation.lockToPortrait();
//   EStyleSheet.build({ $rem: entireScreenWidth / 414 });
// }

// const _orientationDidChange = orientation => {
//   const entireScreenWidth = Dimensions.get("window").width;

//   if (orientation === "LANDSCAPE") {
//     EStyleSheet.build({ $rem: entireScreenWidth / 1024 });
//   } else {
//     EStyleSheet.build({ $rem: entireScreenWidth / 768 });
//   }
// };
function App() {
  EStyleSheet.build({ $rem: entireScreenWidth / 414 });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection Type" component={UserSelection}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Customer" component={CustomerForm}/>
        <Stack.Screen name="Mechanic" component={MechanicForm}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <UserSelection/>
  );
}

export default App;
