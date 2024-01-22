import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import QuizScreen from "./Screens/QuizScreen";

const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <HomeScreen /> */}
      <QuizScreen />
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    marginLeft: 20,
  },
});

export default App;
