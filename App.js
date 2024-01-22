import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <HomeScreen />
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
