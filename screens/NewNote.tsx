import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors, { Color } from "../components/Colors";
import { Props } from "../Types";

import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const NewNote: FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [colors, setColors] = useState<Color>({
    name: "red",
    bg: "#ff0000",
    text: "#fff",
    placeholder: "#fff",
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={[{ color: colors.text }, styles.headerTitle]}>
            {title || "Nueva Nota"}
          </Text>
          <Text style={[{ color: colors.text }, styles.headerSubtitle]}>
            Personal
          </Text>
        </View>
      ),
    });
  }, [title]);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.bg,
      },

      contentStyle: {
        backgroundColor: colors.bg,
      },

      headerTintColor: colors.text,

      headerRight: () => (
        <TouchableOpacity style={styles.headerRight}>
          <Ionicons name="checkmark" size={30} color={colors.text} />
        </TouchableOpacity>
      ),
    });
  }, [colors]);

  return (
    <View style={[{ backgroundColor: colors.bg }, styles.container]}>
      <TextInput
        style={[{ color: colors.text }, styles.title]}
        placeholder="Titulo"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={colors.placeholder}
      />
      <TextInput
        style={[{ color: colors.text }, styles.content]}
        placeholder="Empieza a esribir"
        multiline
        value={content}
        onChangeText={setContent}
        placeholderTextColor={colors.placeholder}
      />
      <Colors
        width={35}
        height={35}
        borderRadius={35}
        space={10}
        onColorSelected={(color) => {
          setColors(color);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 14,
    marginTop: 10,
  },

  headerRight: {
    marginRight: 20,
  },

  header: {
    flexDirection: "column",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  headerSubtitle: {
    fontSize: 12,
  },
});

export default NewNote;
