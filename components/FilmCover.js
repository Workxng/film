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
      <View>
        <Image
          source={{
            uri: item.logo,
            height: 210,
            width: 150,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <Text style={{ 
          fontWeight: "bold",
          textAlign: "center"
           }}>
          
          {item.name}
          <br></br>
          {item.desc}
        </Text>
        
      </View>
    </Link>
  );
};

export default FilmCover;