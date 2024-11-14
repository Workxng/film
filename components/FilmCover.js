import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FilmCover = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/film/film",
        params: { film: item.name },
      }}
    >
      <View className="p-4 m-2 dark:bg-slate-800 md:w-20 rounded-xl">
        <Image
        className="rounded-xl mx-auto"
          source={{
            uri: item.logo,
            height: 210,
            width: 150,
          }}
        />
        <Text 
        className="text-center font-bold text-white p-1 m-1">
          {item.name}
          <br></br>
        </Text>
        <Text
        className="text-center text-white">
        {item.desc}
        </Text>
      </View>
    </Link>
  );
};

export default FilmCover;