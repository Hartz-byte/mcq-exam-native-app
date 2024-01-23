import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HomeScreenTitle from "../Components/HomeScreenTitle";

const ResultScreen = ({ navigation, route }) => {
  const { score } = route.params;

  const resultText = score > 4 ? "Victory" : "Lost";

  return (
    <View style={styles.container}>
      {/* top screen title component */}
      <View>
        <HomeScreenTitle titleText="Result" />
      </View>

      {/* result text and score */}
      <View>
        <Text style={styles.scoreText}>{resultText}</Text>
        <Text style={styles.scoreText}>Score: {score}/10</Text>
      </View>

      {/* home return button */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>Home</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
    color: "#fb8500",
  },
});

export default ResultScreen;
