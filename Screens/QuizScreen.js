import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [quesNo, setQuesNo] = useState(0);

  const getQuiz = async () => {
    const url = "https://opentdb.com/api.php?amount=10&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          {/* question section */}
          <View style={styles.topSection}>
            <Text style={styles.question}>Question</Text>
          </View>

          {/* options section */}
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionBtn}>
              <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
              <Text style={styles.option}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
              <Text style={styles.option}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
              <Text style={styles.option}>Option 4</Text>
            </TouchableOpacity>
          </View>

          {/* buttons section */}
          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Result")}>
              <Text>SUBMIT</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  topSection: {
    marginVertical: 16,
  },
  question: {
    fontSize: 30,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionBtn: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    borderRadius: 12,
  },
  bottomSection: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
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
  parent: {
    height: "100%",
  },
});

export default QuizScreen;
