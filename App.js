import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/Index";
import { BlogProvider } from "./src/hooks/useBlogData";
import CreateScreen from "./src/screens/CreateScreen";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <BlogProvider>
          <Stack.Navigator>
            <Stack.Screen name="Blogs" component={IndexScreen} />
            <Stack.Screen name="Create Blog" component={CreateScreen} />
          </Stack.Navigator>
        </BlogProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
