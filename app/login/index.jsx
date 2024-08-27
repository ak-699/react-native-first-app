import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import colors from "../../constants/Colors";

export default function index() {
  return (
    <View
      style={{
        backgroundColor: colors.WHITE,
        height: "100%",
      }}
    >
      {/* <Text>Login Screen</Text> */}
      <Image
        source={require("../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make new friend?
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 18,
            textAlign: "center",
            color: colors.GREY,
          }}
        >
          Lets adopt the pet you like and make their life happy again
        </Text>
        <Pressable
          style={{
            padding: 14,
            marginTop: 20,
            backgroundColor: colors.PRIMARY,
            width: "100%",
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
