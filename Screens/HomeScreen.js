import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HomeScreenTitle from "../Components/HomeScreenTitle";

const HomeScreen = () => {
  return (
    <View>
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

      {/* start button */}
      <TouchableOpacity>
        <Text>Start Quiz!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    marginLeft: "23%",
  },
});

export default HomeScreen;
