import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Note from "../interfaces/Note";
import FooterNoteItem from "./FooterNoteItem";

const NoteItem: FC<{ item: Note }> = ({ item }) => {
  const [expand, setExpand] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setExpand(!expand);
      }}
      style={[
        styles.container,
        {
          backgroundColor: item.bg,
          borderColor: item.text,
        },
      ]}
    >
      <View style={styles.row}>
        <View>
          <Text
            style={[
              styles.title,
              {
                color: item.text,
              },
            ]}
          >
            {item.title}
          </Text>
          <Text style={{ color: item.text, fontSize: 12 }}>
            {item.category}
          </Text>
        </View>

        <Text style={{ color: item.text, fontSize: 12 }}>{item.date}</Text>
      </View>

      <Text
        numberOfLines={expand ? 0 : 3}
        style={{ color: item.text, fontSize: expand ? 18 : 12 }}
      >
        {item.content}
      </Text>

      {expand && <FooterNoteItem color={item.text} note={item} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default NoteItem;
