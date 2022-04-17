import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Color } from "../components/Colors";
import { Ionicons } from "@expo/vector-icons";

const HeaderNewNote: FC<{
  colors: Color;
  back: (() => void) | undefined;
  saveCallback: () => void;
}> = ({ back, colors, saveCallback }) => {
  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity onPress={back}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color={colors.text}
            style={{
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Nueva Nota
        </Text>
        <Text style={[styles.headerSubtitle, { color: colors.text }]}>
          Personal
        </Text>
      </View>
      <TouchableOpacity onPress={saveCallback}>
        <Ionicons name="checkmark" size={30} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  headerSubtitle: {
    fontSize: 12,
  },
});

export default HeaderNewNote;
