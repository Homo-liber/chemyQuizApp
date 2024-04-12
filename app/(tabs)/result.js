import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Result() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Result Page</Text>
      <Text style={globalStyles.text}>GREAT RESULT!🎉 🥳🎉 🥳🎉 🥳</Text>
    </View>
  );
}
