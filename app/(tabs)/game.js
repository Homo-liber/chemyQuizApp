import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { questions } from "../../data/questions";
import { useState } from "react";
import { Link } from "expo-router";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";
import { CorrectlyContext } from "../../context/CorrectlyContext";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { name, updateUsername } = useContext(UsersNameContext);

  const { trueAnswers, updateCorrectly } = useContext(CorrectlyContext);

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
          <Text style={globalStyles.headingTop}>Chemistry Quiz</Text>
        </View>
        <View style={globalStyles.loginSmallbox}>
          <Text style={globalStyles.loginText}>{name}</Text>
        </View>
      </View>
      <Text style={globalStyles.heading}>QUIZ QUESTIONS {trueAnswers}</Text>
      <Text style={globalStyles.textSmall}>
        {currentIndex + 1} / {questions.length}
      </Text>
      <Text style={globalStyles.textSmall}>{questions[currentIndex].q}</Text>

      {/* /////////////////// A-n-s-w-e-r-s Start /////////////////////////////////// */}

      <Pressable
        disabled={selectedAnswer != null}
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
        }}
      >
        <Text style={globalStyles.textAnswers}>
          A: {questions[currentIndex].answer[0]}
        </Text>
      </Pressable>
      <Pressable
        disabled={selectedAnswer != null}
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
        }}
      >
        <Text style={globalStyles.textAnswers}>
          B: {questions[currentIndex].answer[1]}
        </Text>
      </Pressable>
      <Pressable
        disabled={selectedAnswer != null}
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
        }}
      >
        <Text style={globalStyles.textAnswers}>
          C: {questions[currentIndex].answer[2]}
        </Text>
      </Pressable>
      <Pressable
        disabled={selectedAnswer != null}
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
        }}
      >
        <Text style={globalStyles.textAnswers}>
          D: {questions[currentIndex].answer[3]}
        </Text>
      </Pressable>
      {/* /////////////////// A-n-s-w-e-r-s End /////////////////////////////////// */}
      <View style={globalStyles.greyButtonBox}>
        <Pressable
          disabled={selectedAnswer == null}
          style={globalStyles.greyButton}
          onPress={() => {
            console.log("button NEXT is pressed");

            if (selectedAnswer == questions[currentIndex].correctAnswer) {
              updateCorrectly();
            }

            if (currentIndex < questions.length - 1) {
              handleClick();
            }

            setSelectedAnswer(null);
          }}
        >
          <Link
            // disabled={currentIndex < questions.length - 1}
            disabled={currentIndex < questions.length}
            href={"ads"}
            style={{ paddingTop: 13 }}
          >
            <Text style={globalStyles.greyButtonText}>NEXT</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
