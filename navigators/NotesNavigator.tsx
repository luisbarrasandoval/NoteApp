import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useUser } from "../contexts/UserContext";
import ListNotes from "../screens/ListNotes";
import { RootStackParamList } from "../Types";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator<RootStackParamList>();
export default function NotesNavigator() {
  const { user } = useUser();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="ListNote"
        component={ListNotes}
        options={{
          title: "Todas las notas",
        }}
      />

    </Drawer.Navigator>
  );
}
