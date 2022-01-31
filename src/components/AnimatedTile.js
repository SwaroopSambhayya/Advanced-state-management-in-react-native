import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { AntDesign } from "@expo/vector-icons";
import useBlogData from "../hooks/useBlogData";
import { useNavigation } from "@react-navigation/native";
const AnimatedTile = ({ title, description, index }) => {
  const [isOpen, toggle] = useState(false);
  const navigation = useNavigation();

  const tailwind = useTailwind();
  const { setBlogPost } = useBlogData();
  return (
    <View style={tailwind("mx-8 my-1 flex flex-col bg-white ")}>
      <TouchableOpacity onPress={() => toggle(!isOpen)}>
        <View
          style={tailwind("flex flex-row justify-between  items-center p-3")}
        >
          <Text style={tailwind("text-base font-semibold")}>{title}</Text>
          <View style={tailwind("flex flex-row ")}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Create Blog", { edit: true, index })
              }
            >
              <AntDesign
                name="edit"
                size={20}
                color="black"
                style={tailwind("mx-2")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBlogPost({ type: "delete", data: { index } })}
            >
              <AntDesign
                name="delete"
                size={20}
                color="black"
                style={tailwind("mx-2")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View style={tailwind("p-3")}>
          <Text style={tailwind("text-sm font-semibold")}>{description}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default AnimatedTile;
