import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCover from "../../components/FilmCover.js";

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

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FilmCover item={item} />}
        keyExtractor={(item) => item.desc}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});