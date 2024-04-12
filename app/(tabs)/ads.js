import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Ads() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Advertisment Page</Text>
      <Text style={globalStyles.text}>Rabbat 50%</Text>
      <Text style={globalStyles.text}>Rabbat 50%</Text>
      <Text style={globalStyles.text}>Rabbat 50%</Text>
    </View>
  );
}
