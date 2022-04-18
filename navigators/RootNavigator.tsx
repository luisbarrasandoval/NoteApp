import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, useColorScheme, View } from "react-native";
import { useUser } from "../contexts/UserContext";
import NewNote from "../screens/NewNote";
import { RootStackParamList } from "../Types";
import NotesNavigator from "./NotesNavigator";
import UserNavigator from "./UserNavigator";

const MyTheme = {
  light: {
    dark: false,
    colors: {
      background: "#ffffff",
      card: "#ffffff",
      text: "#222",
      border: "rgba(255,255,255,0.33)",
      primary: "#222",
      notification: "#ff0000",
      placeholder: "rgba(255,255,255,0.7)",
    },
  },

  dark: {
    dark: true,
    colors: {
      background: "#000",
      card: "#000",
      text: "#111",
      border: "rgba(255,255,255,0.33)",
      primary: "#fff",
      notification: "#00ff",
      placeholder: "rgba(255,255,255,0.7)",
    },
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { user } = useUser();

  return (
    <NavigationContainer
      theme={useColorScheme() === "dark" ? MyTheme.dark : MyTheme.light}
    >
      <Stack.Navigator
        initialRouteName="ListNoteNavigator"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ListNoteNavigator" component={NotesNavigator} />
        <Stack.Screen name="UserNavigation" component={UserNavigator} />

        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen name="NewNote" component={NewNote} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
