import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HomeScreenTitle from "../Components/HomeScreenTitle";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* home screen title component */}
      <HomeScreenTitle />

      {/* logo image */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../Assets/Images/logo.png")}
        />
      </View>

      {/* quiz start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.btnText}>Start Quiz!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});

export default HomeScreen;
