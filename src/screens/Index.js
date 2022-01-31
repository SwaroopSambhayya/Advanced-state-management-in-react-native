import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import useBlogData from "../hooks/useBlogData";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AnimatedTile from "../components/AnimatedTile";

const IndexScreen = () => {
  // const blogposts = [];
  const { blogposts, setBlogPost } = useBlogData();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={
            () => navigation.navigate("Create Blog")
            // setBlogPost({
            //   type: "add",
            //   data: { title: "Blog Post", description: "Hello india" },
            // })
          }
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [blogposts]);

  return (
    <SafeAreaView style={{ marginTop: 20, marginBottom: 20 }}>
      <FlatList
        data={blogposts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <AnimatedTile
              title={item.title}
              description={item.description}
              index={index}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
