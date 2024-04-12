import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function DetailsAds() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Details advertisment Page</Text>
      <Text style={globalStyles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea
        eaque at deserunt reprehenderit officiis illum dolorem inventore nisi
        eveniet amet enim possimus, perferendis doloribus tempora mollitia
        distinctio voluptatem rem?
      </Text>
    </View>
  );
}
