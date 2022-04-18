import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Text, View, FlatList, Button, Modal, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NoteItem from "../components/NoteItem";
import VoidImage from "../components/VoidImage";
import { useNoteContext } from "../contexts/NotesContext";
import Note from "../interfaces/Note";
import { Props } from "../Types";

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const ListNotes: FC<Props> = ({ navigation }) => {
  const { notes } = useNoteContext();

  return (
    <View style={{
      flex: 1,
      position: "relative",
    }}>
      {notes.length ? (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NoteItem item={item} />}
        />
      ) : (
        <VoidImage />
      )}

      
      
      <Pressable
      onPress={() => {
        navigation.navigate("NewNote", {
          id: ""
        });
      }}
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: randomColor(),
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center"
      }}>
        <Ionicons name="md-add" size={30} color="white" />
      </Pressable>

      
    </View>
  );
};

export default ListNotes;
