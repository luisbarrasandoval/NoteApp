import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { UserProvider } from "./contexts/UserContext";
import NewNote from "./screens/NewNote";
import { RootStackParamList } from "./Types";
import ListNotes from "./screens/ListNotes";
import { NoteProvider } from "./contexts/NotesContext";
import RootNavigator from "./navigators/RootNavigator";

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

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <NoteProvider>
       <RootNavigator />
      </NoteProvider>
    </UserProvider>
  );
}
