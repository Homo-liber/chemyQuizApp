import { View, Text, Pressable, TouchableOpacity, Linking } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";
import { useContext } from "react";
import { UsersNameContext } from "../../context/UsersNameContext";

export default function DetailsAds() {
  const link = "https://www.deutsches-chemie-museum.de/";
  const openLink = () => Linking.openURL(link);

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

      <View style={globalStyles.detailsAdsBox}>
        <Text style={globalStyles.heading}>Advertisment details</Text>
        {/* textAlign: "justify" */}
        <Text style={[globalStyles.textSmall, {}]}>
          With a collection of historically valuable original systems and
          machines and equipment from the chemical industry from the region
          unique in Europe. There are currently over 300 exhibits on display.
          <TouchableOpacity onPress={openLink} style={globalStyles.linkBox}>
            <Text style={[globalStyles.textSmall, { color: "red" }]}>
              {link}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={globalStyles.greyButtonBox}>
        <Pressable
          style={globalStyles.greyButton}
          onPress={() => {
            console.log(`button BACK pressed`);
          }}
        >
          <Link href="ads" style={globalStyles.greyButtonText}>
            BACK
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
