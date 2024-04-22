import { View, Text, Pressable, TouchableOpacity, Linking } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";

export default function DetailsAds() {
  const link = "https://www.deutsches-chemie-museum.de/";
  const openLink = () => Linking.openURL(link);

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

      <View style={globalStyles.detailsAdsBox}>
        <Text style={globalStyles.heading}>Advertisment details</Text>
        <Text style={[globalStyles.textSmall, { textAlign: "justify" }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          ullamcorper ultrices. Ut id viverra libero. Vivamus eros felis,
          convallis varius aliquet non, viverra nec lacus. Nunc vestibulum
          sollicitudin risus, quis mollis est bibendum sit amet. {"\n"}
          <TouchableOpacity onPress={openLink} style={globalStyles.linkBox}>
            <Text
              style={[
                globalStyles.textSmall,
                { color: "red", textAlign: "justify" },
              ]}
            >
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
