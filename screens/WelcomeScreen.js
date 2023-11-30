import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
      <Text style={{ fontSize: 18 }}>Your local bistro</Text>
      <View style={styles.greeting}>
        <Pressable
          onPress={() => navigation.navigate("Subscribe")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Newsletter</Text>
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
    width: 200,
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    flex: 0.5,
  },
  greeting: {
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default WelcomeScreen;
