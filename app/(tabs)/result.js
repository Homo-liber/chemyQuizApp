import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";
import { useState } from "react";
import { questions } from "../../data/questions";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";
import { CorrectlyContext } from "../../context/CorrectlyContext";

export default function Result() {
  const { name, updateUsername } = useContext(UsersNameContext);
  // const contextData = useContext(UsersNameContext);

  const { trueAnswers, updateCorrectly } = useContext(CorrectlyContext);

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

      <Text style={globalStyles.heading}>CONGRATULATION USER!</Text>

      <View style={globalStyles.resultBox}>
        <Text style={globalStyles.textSmall}>You answered</Text>
        <Text style={globalStyles.textSmall}>
          {trueAnswers} out of {questions.length}
        </Text>
        <Text style={globalStyles.textSmall}>questions correctly</Text>
        <Text style={globalStyles.textSmall}>Great result!</Text>
        <Text style={[globalStyles.textSmall, { fontSize: 60 }]}>🎉 🥳</Text>
      </View>

      <View style={globalStyles.greyButtonBox}>
        <Pressable
          style={globalStyles.greyButton}
          onPress={() => {
            console.log(`button START NEW GAME pressed`);
          }}
        >
          <Link href="#" style={globalStyles.greyButtonText}>
            NEW GAME
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
