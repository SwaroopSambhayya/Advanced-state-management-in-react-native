import { View, Text } from "react-native";
import React, { createContext, useContext, useReducer, useState } from "react";

const BlogContext = createContext();

const reducer = (blogposts, payload) => {
  switch (payload.type) {
    case "add":
      return [
        ...blogposts,
        {
          id: blogposts.length + 1,
          title: payload.data.title,
          description: payload.data.description,
        },
      ];
    case "edit":
      blogposts[payload.data.index] = {
        id: payload.data.index,
        title: payload.data.title,
        description: payload.data.description,
      };

      return [...blogposts];
    case "delete":
      blogposts.splice(payload.data.index, 1);
      return [...blogposts];
  }
};

export const BlogProvider = ({ children }) => {
  const [blogposts, setBlogPost] = useReducer(reducer, []);

  return (
    <BlogContext.Provider value={{ blogposts, setBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default useBlogData = () => {
  return useContext(BlogContext);
};
