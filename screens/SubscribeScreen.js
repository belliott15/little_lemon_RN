import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { validateEmail } from "../utils/index.js";

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("You are now signed up for our newsletter!");
    navigation.navigate("Welcome");
    console.log(email, "email");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.prompt}>
        Subscribe to our newsletter for our latest delicious recipes
      </Text>
      <TextInput
        placeholder="Type your email"
        style={styles.textBox}
        onChangText={setEmail}
      />
      <Pressable
        onPress={(e) => {
          handleSubscribe(e);
        }}
        style={styles.button}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Subscribe</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    margin: 40,
    justifyContent: "center",
    flex: 0.25,
  },
  prompt: {
    fontSize: 20,
    width: 300,
    textAlign: "center",
    marginBottom: 30,
  },
  textBox: {
    backgroundColor: "white",
    borderColor: "#324d39",
    borderWidth: 2,
    borderRadius: 10,
    width: 250,
    height: 40,
    fontSize: 25,
    shadowColor: "grey",
    shadowOffset: {
      height: 8,
      width: 8,
    },
    shadowOpacity: 0.6,
    padding: 8,
  },
  button: {
    padding: 7,
    backgroundColor: "#324d39",
    borderRadius: 10,
    shadowColor: "#b8bc86",
    shadowOffset: {
      height: 8,
      width: 8,
    },
    shadowOpacity: 0.6,
    justifyContent: "center",
    alignContent: "center",
    width: 250,
    alignItems: "center",
    marginTop: 30,
  },
});

export default SubscribeScreen;
