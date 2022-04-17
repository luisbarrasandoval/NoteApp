import { FC, useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors, { Color } from "../components/Colors";
import { Props } from "../Types";
import { useTheme } from "@react-navigation/native";
import HeaderNewNote from "../components/HeaderNewNote";
import { useNoteContext } from "../contexts/NotesContext";

const NewNote: FC<Props> = ({ navigation }) => {
  const { addNote } = useNoteContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [placeholder, setPlaceholder] = useState("Empieza a esribir");

  const refContent = useRef<TextInput>(null);

  const { colors: theme } = useTheme();

  const [colors, setColors] = useState<Color>({
    bg: theme.background,
    text: theme.text,
    placeholder: "rgba(0,0,0,0.5)",
  });

  return (
    <View style={[{ backgroundColor: colors.bg }, styles.container]}>
      <HeaderNewNote
        back={navigation.canGoBack() ? navigation.goBack : undefined}
        colors={colors}
        saveCallback={() => {
          const nota = {
            id: title.length + content.length,
            title,
            content,
            category: "Personal",
            date: new Date().toDateString(),
            bg: colors.bg,
            text: colors.text,
          };
          addNote(nota);
          navigation.goBack();
        }}
      />

      <View style={{ marginTop: 15, flex: 1 }}>
        <TextInput
          style={[{ color: colors.text }, styles.title]}
          placeholder="Titulo"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor={colors.placeholder}
          onSubmitEditing={() => refContent.current?.focus()}
        />
        <TextInput
          style={[{ color: colors.text }, styles.content]}
          placeholder={placeholder}
          multiline
          value={content}
          onChangeText={setContent}
          placeholderTextColor={colors.placeholder}
          ref={refContent}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
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
});

export default NewNote;
