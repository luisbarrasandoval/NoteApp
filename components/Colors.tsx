import { FC } from "react";
import { Pressable, ScrollView, View } from "react-native";

export interface Color {
  bg: string;
  text: string;
  placeholder: string;
}

const colors: Array<Color> = [
  {
    bg: "#FFF89A",
    text: "#333",
    placeholder: "rgba(0,0,0,0.5)",
  },

  {
    bg: "#9ADCFF",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.8)",
  },

  {
    bg: "#FFB2A6",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.7)",
  },

  {
    bg: "#FF8AAE",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.7)",
  },

  {
    bg: "#B983FF",
    text: "#fff",
    placeholder: "rgba(255,255,255,0.5)",
  },

  {
    bg: "#ffffff",
    text: "#000",
    placeholder: "rgba(0,0,0,0.5)",
  },



  {
    bg: "#FF7171",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#9FD8DF",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#F0E4D7",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#F0D9FF",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#CEE5D0",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#94B3FD",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  
  {
    bg: "#712B75",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#D49B54",
    text: "#fff",
    placeholder: "rgba(255,255,255,.8)",
  },
  {
    bg: "#143F6B",
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
        showsHorizontalScrollIndicator={false}
      >
        {colors.map((color) => (
          <Pressable
            onPress={() => {
              'worklet'
              onColorSelected(color);
            }}
            key={color.bg}
            style={{
              width,
              height,
              backgroundColor: color.bg,
              borderRadius,
              marginRight: space,
              borderWidth: 1,
              borderColor: color.placeholder,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Colors;
