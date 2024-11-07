import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCover from "../../components/FilmCover";

const DATA = [
  {
    desc: "seorang anak laki-laki yang berusaha menebus kesalahan yang ia lakukan kepada seorang gadis tuna rungu",
    name: "A Silent Voice",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
  },
  {
    desc: "seorang siswa SMA menemukan buku harian teman sekelasnya yang menderita penyakit pankreas",
    name: "I Want To Eat Your Pancreas",
    logo: "https://play-lh.googleusercontent.com/SUDOxGhYBT1YRnuxaFkT_XS1fxwgOJvXG0bLNcVKC-HIeiSA8A8odYUUlMqn5t_dutquYIyuvR0Q_XtUkcAA=w240-h480-rw",
  },
  {
    desc: "Kota Tokyo, Jepang yang terkena invasi gelembung dan menyebabkan kerusakan gravitasi bumi.",
    name: "Bubble",
    logo: "https://m.media-amazon.com/images/M/MV5BNjMzNmFjZWItMjZlZS00OTgwLTgwMmMtYTc5MTA0MTY2MGEwXkEyXkFqcGc@._V1_.jpg",
  },
];

const TeamDetail = () => {
  const { film } = useLocalSearchParams();
  const selectedTeam = DATA.filter(function (item) {
    return item.name === film;
  });

  console.log(selectedTeam);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FilmCover item={selectedTeam[0]} />
    </SafeAreaView>
  );
};

export default TeamDetail;[]