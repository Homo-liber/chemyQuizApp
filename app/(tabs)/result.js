import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";
import { useState } from "react";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";

export default function Result() {
  const { name, updateUsername } = useContext(UsersNameContext);

  const contextData = useContext(UsersNameContext);

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
        <Text style={globalStyles.textSmall}>13 out of 15</Text>
        <Text style={globalStyles.textSmall}>questions correctly</Text>
        <Text style={globalStyles.textSmall}>Great result!</Text>
        <Text style={[globalStyles.textSmall, { fontSize: 60 }]}>🎉 🥳</Text>
      </View>

      <View style={globalStyles.greyButtonBox}>
        <Pressable
          style={globalStyles.greyButton}
          onPress={() => {
            console.log(`button START pressed`);
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
