import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: "20rem" }}>Welcome to Little Lemon</Text>
      <View style={styles.button}>
        <Pressable onPress={() => navigation.navigate("Subscribe")}>
          <Text>Subscribe</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderColor: "green",
    borderWidth: "2px",
    padding: 8,
    backgroundColor: "#fff700",
    borderRadius: "10px",
    shadowColor: "#333333",
    shadowOffset: {
      height: 6,
      width: 6,
    },
    shadowOpacity: 0.6,
  },
});

export default WelcomeScreen;
