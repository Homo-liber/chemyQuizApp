import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontSize: 25,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="banckward" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="creditcard" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="ads"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="creditcard" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="creditcard" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
}
