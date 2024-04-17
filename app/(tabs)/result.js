import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Result() {
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

      <Text style={globalStyles.text}>GREAT RESULT!🎉 🥳🎉 🥳🎉 🥳</Text>
    </View>
  );
}
