import { FC, useState } from "react";
import { Text, View, FlatList } from "react-native";
import NoteItem from "../components/NoteItem";
import { useNoteContext } from "../contexts/NotesContext";
import Note from "../interfaces/Note";



const ListNotes: FC = () => {
  const { notes } = useNoteContext()

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteItem item={item} />}

      />
    </View>
  );
};

export default ListNotes;
