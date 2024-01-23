import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ResultScreen = ({ navigation }) => {
  return (
    <View>
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
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    marginLeft: "23%",
  },
});

export default ResultScreen;
