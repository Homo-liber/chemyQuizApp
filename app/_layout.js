import { Stack } from "expo-router";
import UsersNameProvider from "../context/UsersNameProvider";

export default function RootStack() {
  return (
    <UsersNameProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="login" /> */}
      </Stack>
    </UsersNameProvider>
  );
}
