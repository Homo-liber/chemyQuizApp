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
        <Text style={[globalStyles.textSmall, { textAlign: "justify" }]}>
          Lorem ispum placerat mi, eu varius velit. Aenean sagittis at arcu id
          feugiat. Nullam mattis urna ante, sed rutrum ipsum tempus ut. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Aenean varius
          lorem a lacinia commodo.{"\n"}
          <Text style={[globalStyles.textSmall, { color: "red" }]}>
            Chemie Museum: {"\n"}
          </Text>
          <TouchableOpacity onPress={openLink}>
            <Text style={[globalStyles.textSmall, { color: "red" }]}>link</Text>
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
