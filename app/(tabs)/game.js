import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Game() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Game Page</Text>
    </View>
  );
}
