import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to Little Lemon</Text>
      <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text>Subscribe</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
