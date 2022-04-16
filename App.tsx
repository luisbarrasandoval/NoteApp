import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { UserProvider } from "./contexts/UserContext";
import NewNote from "./screens/NewNote";
import { RootStackParamList } from "./Types";

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
    },
  },
};


const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer
        theme={useColorScheme() === "dark" ? MyTheme.dark : MyTheme.light}
      >
        <Drawer.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}

        >
          <Drawer.Screen name="NewNote" component={NewNote} options={{
          
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
