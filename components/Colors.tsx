import { FC } from "react";
import { Pressable, ScrollView, View } from "react-native";

export interface Color {
  name: string;
  bg: string;
  text: string;
  placeholder: string;
}

const colors: Array<Color> = [
  {
    name: "red",
    bg: "#ff0000",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.7)",
  },

  {
    name: "green",
    bg: "#00ff00",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.8)",
  },

  {
    name: "blue",
    bg: "#0000ff",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.7)",
  },

  {
    name: "yellow",
    bg: "#ffff00",
    text: "#000",
    placeholder: "rgba(0,0,0,0.5)",
  },

  {
    name: "black",
    bg: "#000000",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.5)",
  },

  {
    name: "white",
    bg: "#ffffff",
    text: "#000",
    placeholder: "rgba(0,0,0,0.5)",
  },

  {
    name: "gray",
    bg: "#808080",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.33)",
  },

  {
    name: "cyan",
    bg: "#00ffff",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
];

export interface ColorsProps {
  onColorSelected: (color: Color) => void;
  width: number;
  height: number;
  space?: number;
  borderRadius?: number;
}

const Colors: FC<ColorsProps> = ({
  width,
  height,
  borderRadius,
  space,
  onColorSelected,
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {colors.map((color) => (
          <Pressable
            onPress={() => onColorSelected(color)}
            key={color.name}
            style={{
              width,
              height,
              backgroundColor: color.bg,
              borderRadius,
              marginRight: space,
              borderWidth: 1,
              borderColor: color.placeholder
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Colors;
