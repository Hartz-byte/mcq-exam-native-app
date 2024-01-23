import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewScreen = ({ navigation, route }) => {
  const { questions } = route.params;
  const [loading, setLoading] = useState(true);

  // loading effect
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {/* loading check */}
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View>
            {/* home button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>

            <ScrollView>
              <View style={styles.parent}>
                {/* mapping over questions for each question */}
                {questions.map((question, index) => (
                  <View key={index} style={styles.topSection}>
                    {/* question display */}
                    <Text style={styles.question}>
                      Question: {decodeURIComponent(question.question)}
                    </Text>

                    {/* answer display */}
                    <Text style={styles.question}>
                      Answer: {decodeURIComponent(question.correct_answer)}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 35,
  },
  parent: {
    padding: 20,
  },
  topSection: {
    marginVertical: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
});

export default ReviewScreen;
