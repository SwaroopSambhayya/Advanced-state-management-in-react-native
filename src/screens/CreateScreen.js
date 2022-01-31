import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import useBlogData from "../hooks/useBlogData";
import { useNavigation, useRoute } from "@react-navigation/native";

const CreateScreen = () => {
  const tailwind = useTailwind();

  const navigation = useNavigation();
  const route = useRoute();
  const { setBlogPost, blogposts } = useBlogData();
  const [title, setTitle] = useState(
    route?.params?.edit ? blogposts[route?.params?.index].title : ""
  );
  const [description, setDescription] = useState(
    route?.params?.edit ? blogposts[route?.params?.index].description : ""
  );

  return (
    <SafeAreaView style={tailwind("flex  h-full flex-col items-center  ")}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={[tailwind("w-3/4 h-12 bg-slate-200 rounded-lg p-2 my-5")]}
      />
      <TextInput
        placeholder="Description"
        editable
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        numberOfLines={4}
        style={[tailwind("w-3/4 h-24  bg-slate-200 rounded-lg p-3 my-5")]}
      />
      <TouchableOpacity
        onPress={() => {
          setBlogPost({
            type: route?.params?.edit ? "edit" : "add",
            data: { title, description, index: route?.params?.index },
          });

          navigation.goBack();
        }}
        style={tailwind(
          "p-3 w-1/2  rounded-md my-2 flex items-center justify-center bg-blue-500 "
        )}
      >
        <Text style={[tailwind("text-white text-base font-bold")]}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateScreen;
