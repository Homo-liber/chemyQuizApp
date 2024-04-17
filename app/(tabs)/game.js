import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { questions } from "../data/questions";
import { useState } from "react";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
  };

  let yellowColor = "#f9eccc";
  let redColor = "#ff9999";
  let greenColor = "#4daa57";

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titelBox}>
        <View>
          <Text style={globalStyles.headingTop}>Chemistry quiz</Text>
        </View>
        <View style={globalStyles.loginSmallbox}>
          <Text style={globalStyles.loginText}></Text>
        </View>
      </View>
      <Text style={globalStyles.heading}>QUIZ QUESTIONS</Text>
      <Text style={globalStyles.textSmall}>
        {currentIndex + 1} / {questions.length}
      </Text>
      <Text style={globalStyles.textSmall}>{questions[currentIndex].q}</Text>
      {/* /////////////////// Answers /////////////////////////////////// */}

      <View style={globalStyles.answerBox}>
        <Text style={globalStyles.textSmall}>
          <Text style={{ textAlign: "left" }}>
            A: {questions[currentIndex].answer[0]}
          </Text>
        </Text>
      </View>
      <View style={globalStyles.answerBox}>
        <Text style={globalStyles.textSmall}>
          <Text style={{ textAlign: "left" }}>
            B: {questions[currentIndex].answer[1]}
          </Text>
        </Text>
      </View>
      <View style={globalStyles.answerBox}>
        <Text style={globalStyles.textSmall}>
          <Text style={{ textAlign: "left" }}>
            C: {questions[currentIndex].answer[2]}
          </Text>
        </Text>
      </View>
      <View style={globalStyles.answerBox}>
        <Text style={globalStyles.textSmall}>
          <Text style={{ textAlign: "left" }}>
            D: {questions[currentIndex].answer[3]}
          </Text>
        </Text>
      </View>
      {/* /////////////////// Answers /////////////////////////////////// */}
      <View style={globalStyles.submitButtonBox}>
        <Pressable
          style={globalStyles.submitButton}
          onPress={() => {
            if (currentIndex < questions.length - 1) {
              handleClick();
            } else {
              setCurrentPage("ads");
            }
            console.log(`button NEXT pressed`);
          }}
        >
          <Text style={globalStyles.submitButtonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}
