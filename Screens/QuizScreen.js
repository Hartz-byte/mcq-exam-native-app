import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const QuizScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {/* question section */}
      <View style={styles.question}>
        <Text>Question</Text>
      </View>

      {/* options section */}
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>

      {/* skip/next button section */}
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Result")}>
          <Text>END</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    height: "100%",
  },
  question: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default QuizScreen;
