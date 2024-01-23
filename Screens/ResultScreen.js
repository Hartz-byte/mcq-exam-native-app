import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* result text */}
      <View>
        <Text>Result</Text>
      </View>

      {/* image */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../Assets/Images/logo.png")}
        />
      </View>

      {/* button */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default ResultScreen;
