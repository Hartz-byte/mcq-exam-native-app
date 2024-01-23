import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

// options shuffle logic
const optionsShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // api fetch for quiz questions
  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(getOptions(data.results[0]));
    setLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  // next btn press logic
  const handleNextPress = () => {
    setQuesNo(quesNo + 1);
    setOptions(getOptions(questions[quesNo + 1]));
  };

  // getting all options in a single array
  const getOptions = (ques) => {
    const options = [...ques.incorrect_answers];
    options.push(ques.correct_answer);

    optionsShuffle(options);

    return options;
  };

  // option selection logic
  const selectedOption = (opt) => {
    // calculating the score
    if (opt === questions[quesNo].correct_answer) {
      setScore(score + 1);
    }

    // moving to the next question
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(getOptions(questions[quesNo + 1]));
    }
  };

  // submit btn press logic
  const submitHandle = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.btnText}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            {/* question section */}
            <View style={styles.topSection}>
              <Text style={styles.question}>
                Q. {decodeURIComponent(questions[quesNo].question)}
              </Text>
            </View>

            {/* options section */}
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => selectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => selectedOption(options[1])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => selectedOption(options[2])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => selectedOption(options[3])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>

            {/* buttons section */}
            <View style={styles.bottomSection}>
              {quesNo !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.btnText}>SKIP</Text>
                </TouchableOpacity>
              )}

              {quesNo === 9 && (
                <TouchableOpacity style={styles.button} onPress={submitHandle}>
                  <Text style={styles.btnText}>SUBMIT</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
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
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
