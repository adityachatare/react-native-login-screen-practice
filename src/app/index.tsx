import React from "react";
import { Image, Text, View } from "react-native";
// import './../../assets/images/logo.png';

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 200,
          height: 200,
          flex: 1,

          justifyContent: "center",
          alignContent: "center",
        }}
      />

      <Text
        style={{
          // alignContent: "center",
          // flex: 1,
          // justifyContent: "center",
          alignContent: "center",
        }}
      >
        Sign In
      </Text>
      <Text>Lets experience the joy of telecare AI.</Text>
    </View>
  );
};

export default LoginScreen;
