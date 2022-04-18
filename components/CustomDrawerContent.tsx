import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUser } from "../contexts/UserContext";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNoteContext } from "../contexts/NotesContext";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { user } = useUser();


  const { notes } = useNoteContext();
  const categorias = notes.reduce((acc, note) => {
    if (!acc.includes(note.category)) {
      acc.push(note.category);
    }
    return acc;
  }, [] as string[]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 50, height: 50, borderRadius: 5, marginRight: 12 }}
        />

        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {user || "Anonymous"}
          </Text>

          {user ? (
            <Text>{user.id}</Text>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 5,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                Iniciar sesion
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={{
            marginBottom: 20,
          }}


          onPress={() => {
            props.navigation.navigate("UserNavigation");
          }}
        >
          <Ionicons name="md-settings" color="#222" size={24} />
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: 10,
        }}
      >
        <DrawerItemList {...props} />
        {categorias.map((categoria) => (
          <DrawerItem
            key={categoria}
            label={categoria}
            onPress={() => props.navigation.navigate(categoria)}
          />
        ))}
      </DrawerContentScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          by: LFBS
        </Text>
        <Ionicons name="ios-help-circle" size={24} color="black" />
      </View>
    </View>
  );
}

export default CustomDrawerContent;
