import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View, Share } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNoteContext } from "../contexts/NotesContext";
import Note from "../interfaces/Note";

const FooterNoteItem: FC<{color: string, note: Note}> = ({color, note}) => {

  const { deleteNote } = useNoteContext()

  const shareNote = () => {
    Share.share({
      message: `${note.title}\n${note.content}`,
      title: "Compartir nota",
    });
  };


  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="pencil" size={24} color={color} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={() => {
        deleteNote(note)
      }}>
        <Ionicons name="md-trash" size={24} color={color} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={shareNote}>
        <Ionicons name="share" size={24} color={color}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  footer: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  footerButton: {
    paddingHorizontal: 10,
  },
});


export default FooterNoteItem;