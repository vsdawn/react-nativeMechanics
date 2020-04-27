import React, { useState } from "react";
import { Text, TextInput } from "react-native-paper";
import styles from "./MechanicFormStyle";
import {
KeyboardAvoidingView,
SafeAreaView,
ImageBackground,
Image,
Platform,
TouchableOpacity,
ScrollView,
View
} from "react-native";


const MechanicForm = ({navigation}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const inputs = {};

  const focusNextField = _ref => {
    inputs[_ref].focus();
  };

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.innerContainer}
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
            keyboardVerticalOffset={Platform.select({
              ios: 80,
              android: 500,
            })}
          >
            <View>
              <Text style={styles.logo}>LOGO</Text>
            </View>
            <View style={styles.outerLayerContainer}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.credText}>
                Enter your credentials to continue
              </Text>
              <Text style={styles.label}>User Name</Text>
              <TextInput
                returnKeyType="next"
                ref={input => {
                  inputs.user_name = input;
                }}
                onSubmitEditing={() => focusNextField("password")}
                style={styles.textinputs}
                // mode="outlined"
                placeholder=""
                value={userName}
                onChangeText={value => setUserName(value)}
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                ref={input => {
                  inputs.password = input;
                }}
                style={styles.textinputs}
                placeholder=""
                value={password}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={[
                  styles.buttonLogin,
                  // { backgroundColor: styles.switchColor.color }
                ]}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.startTrip}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.forgotPass}>Forgot Password ?</Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default MechanicForm;