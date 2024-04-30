import { Stack } from "expo-router";
import UsersNameProvider from "../context/UsersNameProvider";
import CorrectlyProvider from "../context/CorrectlyProvider";

export default function RootStack() {
  return (
    <CorrectlyProvider>
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
    </CorrectlyProvider>
  );
}
