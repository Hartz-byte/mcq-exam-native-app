import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const QuizScreen = () => {
  return (
    <View>
      {/* question section */}
      <View>
        <Text>Question</Text>
      </View>

      {/* options section */}
      <View>
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
      <View>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
