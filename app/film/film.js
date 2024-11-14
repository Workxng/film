import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCover from "../../components/FilmCover";

const DATA = [
  {
    desc: "Seorang anak laki-laki yang berusaha menebus kesalahan yang ia lakukan kepada seorang gadis tuna rungu",
    name: "A Silent Voice",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
  },
  {
    desc: "Seorang siswa SMA menemukan buku harian teman sekelasnya yang menderita penyakit pankreas",
    name: "I Want To Eat Your Pancreas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThh7WVrJ3PiGF3KHG0686L64HLmjYKqdHWoQ&s",
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