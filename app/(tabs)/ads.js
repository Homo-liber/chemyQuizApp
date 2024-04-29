import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";

export default function Ads() {
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
      <Text style={globalStyles.heading}>ADVERTISMENT</Text>

      <View style={globalStyles.imageAdsBox}>
        <Image
          style={globalStyles.imageAds}
          source={require("../../assets/ads.jpg")}
        />
      </View>

      <View style={globalStyles.yellowButtonBox}>
        <Pressable
          style={[globalStyles.yellowButton, { width: "100%" }]}
          onPress={() => {
            console.log("button DETAILS OF ADS is pressed");
          }}
        >
          <Link href="details" style={globalStyles.yellowButtonText}>
            DETAILS OF ADS
          </Link>
        </Pressable>
      </View>

      <View style={globalStyles.greyButtonBox}>
        <Pressable
          style={[globalStyles.greyButton, { width: "100%" }]}
          onPress={() => {
            if (currentIndex < questions.length - 1) {
              handleClick();
            } else {
              setCurrentPage("ads");
            }
            console.log(`button RESULT pressed`);
          }}
        >
          <Link href="result" style={globalStyles.greyButtonText}>
            RESULT
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
