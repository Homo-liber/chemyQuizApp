import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { questions } from "../data/questions";
import { useState } from "react";
import { Link } from "expo-router";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
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

      {/* /////////////////// A-n-s-w-e-r-s Start /////////////////////////////////// */}

      <Pressable
        style={[
          globalStyles.answerBox,
          {
            backgroundColor:
              selectedAnswer != 0
                ? yellowColor
                : 0 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor,
          },
        ]}
        onPress={() => {
          setSelectedAnswer(0);
          console.log(`answer "A" is pressed`);
        }}
      >
        <Text style={globalStyles.textAnswers}>
          A: {questions[currentIndex].answer[0]}
        </Text>
      </Pressable>
      <Pressable
        style={[
          globalStyles.answerBox,
          {
            backgroundColor:
              selectedAnswer != 1
                ? yellowColor
                : 1 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor,
          },
        ]}
        onPress={() => {
          setSelectedAnswer(1);
          console.log(`answer "B" is pressed`);
        }}
      >
        <Text style={globalStyles.textAnswers}>
          B: {questions[currentIndex].answer[1]}
        </Text>
      </Pressable>
      <Pressable
        style={[
          globalStyles.answerBox,
          {
            backgroundColor:
              selectedAnswer != 2
                ? yellowColor
                : 2 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor,
          },
        ]}
        onPress={() => {
          setSelectedAnswer(2);
          console.log(`answer "C" is pressed`);
        }}
      >
        <Text style={globalStyles.textAnswers}>
          C: {questions[currentIndex].answer[2]}
        </Text>
      </Pressable>
      <Pressable
        style={[
          globalStyles.answerBox,
          {
            backgroundColor:
              selectedAnswer != 3
                ? yellowColor
                : 3 != questions[currentIndex].correctAnswer
                ? redColor
                : greenColor,
          },
        ]}
        onPress={() => {
          setSelectedAnswer(3);
          console.log(`answer "D" is pressed`);
        }}
      >
        <Text style={globalStyles.textAnswers}>
          D: {questions[currentIndex].answer[3]}
        </Text>
      </Pressable>
      {/* /////////////////// A-n-s-w-e-r-s End /////////////////////////////////// */}
      <View style={globalStyles.greyButtonBox}>
        <Pressable
          style={globalStyles.greyButton}
          onPress={() => {
            if (currentIndex < questions.length - 1) {
              handleClick();
            }
            console.log(`button NEXT pressed`);
            setSelectedAnswer(null);
          }}
        >
          <Text style={globalStyles.greyButtonText}>NEXT</Text>
          {/* <Link
            href={currentIndex == questions.length ? "ads" : "game"}
            style={globalStyles.greyButtonText}
          >
            NEXT
          </Link> */}
        </Pressable>
      </View>
    </View>
  );
}
