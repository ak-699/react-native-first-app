import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import colors from "../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function index() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/home", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        // setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
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
          onPress={onPress}
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
