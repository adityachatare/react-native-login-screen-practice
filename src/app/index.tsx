import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 60 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../../assets/images/logo.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <View
          style={{
            height: 20,
          }}
        />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 26,
          }}
        >
          {" "}
          Sign In
        </Text>
        <View
          style={{
            height: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 16,
            color: "#808080",
          }}
        >
          {" "}
          Let's experience the joy of telecare AI.
        </Text>
        <View
          style={{
            height: 30,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "flex-start",
          flex: 1,
          // padding: 5,
          // borderWidth: 1,
        }}
      >
        {/* <Text>Email Address</Text>
        <TextInput
          placeholder="elementary221b@gmail.com"
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 14,
            fontSize: 16,
            marginBottom: 12,
          }}
        />

        <Text style={{}}>Password</Text>
        <TextInput
          placeholder="Enter your password..."
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 14,
            fontSize: 16,
            marginBottom: 12,
          }}
        /> */}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
            }}
          >
            Email Address
          </Text>
          <View style={{ height: 10 }}></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: "#B7E36A",
              borderRadius: 22,
              height: 58,
              paddingHorizontal: 16,
              shadowColor: "#B7E36A",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.35,
              shadowRadius: 8,
              elevation: 4,
              width: "100%",
            }}
          >
            <Ionicons
              name="mail-outline"
              size={22}
              color="#555"
              style={{
                marginRight: 10,
              }}
            />

            <TextInput
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#777"
              style={{
                fontFamily: "Poppins_500Medium",
                flex: 1,
                fontSize: 16,
                color: "#333",
              }}
            />
          </View>
          <View style={{ height: 20 }}></View>

          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
            }}
          >
            Password
          </Text>
          <View style={{ height: 10 }}></View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: "#B7E36A",
              borderRadius: 22,
              height: 58,
              paddingHorizontal: 16,
              shadowColor: "#B7E36A",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.35,
              shadowRadius: 8,
              elevation: 4,
              width: "100%",
            }}
          >
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#555"
              style={{
                marginRight: 10,
              }}
            />

            <TextInput
              placeholder="Enter your password..."
              secureTextEntry
              placeholderTextColor="#777"
              style={{
                flex: 1,
                fontSize: 16,
                color: "#333",
                fontFamily: "Poppins_500Medium",
              }}
            />
            {/* <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#555"
              style={{
                marginRight: 0,
              }}
            /> */}
          </View>
          <View
            style={{
              height: 20,
            }}
          ></View>
          <Pressable
            // onPress={}
            style={(pressed) => ({
              backgroundColor: "#B7E36A",
              borderRadius: 20,
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // width: "100%",
            })}
          >
            <Text
              style={{
                textAlign: "center",
                alignItems: "center",
                // verticalAlign: "middle",
                justifyContent: "center",

                color: "white",
                fontSize: 18,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Sign In
            </Text>
            <Ionicons
              name="arrow-forward"
              size={22}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </Pressable>
          <View style={{ height: 30 }}></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
              }}
            >
              <Ionicons
                name="logo-facebook"
                size={44}
                // color="white"
                // style={{ marginLeft: 10 }}
              />
            </Pressable>

            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
              }}
            >
              <Ionicons
                name="logo-google"
                size={44}
                // color="white"
                // style={{ marginLeft: 10 }}
              />
            </Pressable>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
              }}
            >
              <Ionicons
                name="logo-instagram"
                size={44}
                // color="white"
                // style={{ marginLeft: 10 }}
              />
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
              }}
            >
              Don't have an account?
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: "#B7E36A",
              }}
            >
              {" "}
              Sign Up
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#B7E36A",
              }}
            >
              Forgot your Password?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
