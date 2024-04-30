import { View, Text, Image, TextInput, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useState } from "react";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";

export default function Home() {
  const [nameOfUser, setNameOfUser] = useState("");

  const { name, updateUsername } = useContext(UsersNameContext);

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
      <Text style={globalStyles.heading}>WELCOME!</Text>

      <View style={globalStyles.imageWelcomeBox}>
        <Image
          source={require("../../assets/startpic.jpg")}
          style={globalStyles.imageWelcome}
        />
      </View>
      <Text style={globalStyles.heading}>Enter your name:</Text>
      <View>
        <TextInput
          style={globalStyles.inputName}
          // update the state variable on every keystroke
          // 🚨 You must use onChangeText instead of onChange
          onChangeText={(text) => {
            // setName(text);
            updateUsername(text);
            // setLogin(text);
            setNameOfUser(text);
          }}
          // set the value of the TextInput to the value of the state variable to "bind" it to the state
          // value={name}
          value={nameOfUser}
        />

        <View style={globalStyles.yellowButtonBox}>
          <Pressable
            style={globalStyles.yellowButton}
            onPress={() => {
              console.log(`Username: ${name}`);
            }}
          >
            <Text style={globalStyles.yellowButtonText}>LOGIN</Text>
          </Pressable>
        </View>

        <View style={globalStyles.greyButtonBox}>
          <Pressable
            style={globalStyles.greyButton}
            onPress={() => {
              console.log(`button START pressed`);
            }}
          >
            <Link href="game" style={globalStyles.greyButtonText}>
              START
            </Link>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
