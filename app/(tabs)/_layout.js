import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.green1,
        },
        headerTintColor: COLORS.purple,
        tabBarStyle: {
          backgroundColor: COLORS.green1,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontSize: 20,
          color: COLORS.purple,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="caretright" size={24} color="#754668" />;
          },
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons name="game-controller" size={24} color="#754668" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ads"
        options={{
          tabBarIcon: () => {
            return <Foundation name="burst-sale" size={28} color="#754668" />;
          },
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="file-text" size={24} color="#754668" />;
          },
        }}
      />
      <Tabs.Screen
        name="result"
        options={{
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="published-with-changes"
                size={24}
                color="#754668"
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
