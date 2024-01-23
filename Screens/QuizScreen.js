import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

// function to shuffle options array
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
  const [timer, setTimer] = useState(10);

  // fetch questions from API
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

  // get options as an array and shuffle them
  const getOptions = (ques) => {
    const options = [...ques.incorrect_answers, ques.correct_answer];
    optionsShuffle(options);
    return options;
  };

  // timer logic
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      if (timer === 0) handleTimeout();
    }, 1000);

    // clear the timer when the question changes
    return () => clearInterval(timeInterval);
  }, [timer, quesNo]);

  // reset timer on a new question
  useEffect(() => {
    setTimer(10);
  }, [quesNo, questions]);

  // function to handle when timer runs out
  const handleTimeout = () => {
    // changes to next question
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(getOptions(questions[quesNo + 1]));
    }
    // changes the screen to result screen
    if (quesNo === 9) {
      submitHandle();
    }
  };

  // function to handle next button press
  const handleNextPress = () => {
    // changes to next question
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(getOptions(questions[quesNo + 1]));
    }
    // changes the screen to result screen with score value
    else {
      navigation.navigate("Result", { score });
    }
  };

  // option selection function
  const selectedOption = (opt) => {
    // +1 score for correct
    if (opt === questions[quesNo].correct_answer) {
      setScore(score + 1);
    }

    // changes to next question
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(getOptions(questions[quesNo + 1]));
    }
    // changes the screen to result screen
    if (quesNo === 9) {
      submitHandle();
    }
  };

  // function to handle submit press button
  const submitHandle = () => {
    navigation.navigate("Result", { score, questions });
  };

  return (
    <View style={styles.container}>
      {/* loading check */}
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            {/* question display */}
            <View style={styles.topSection}>
              <Text style={styles.question}>
                Q {quesNo}. {decodeURIComponent(questions[quesNo].question)}
              </Text>
            </View>

            {/* options display */}
            <View style={styles.options}>
              {/* mapping over "options" array */}
              {options.map((opt, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionBtn}
                  onPress={() => selectedOption(opt)}
                >
                  <Text style={styles.option}>{decodeURIComponent(opt)}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* timer display */}
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>{timer}s</Text>
            </View>

            {/* buttons section */}
            <View style={styles.bottomSection}>
              {/* skip button */}
              {quesNo !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.btnText}>SKIP</Text>
                </TouchableOpacity>
              )}

              {/* submit button */}
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
  loadingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  parent: {
    height: "100%",
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default QuizScreen;
