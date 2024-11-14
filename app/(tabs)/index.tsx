import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCover from "../../components/FilmCover.js";

const DATA = [
  {
    desc: "Directed: Naoko Yamada",
    name: "A Silent Voice",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
  },
  {
    desc: "Directed: Shinichiro Ushijima",
    name: "I Want To Eat Your Pancreas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThh7WVrJ3PiGF3KHG0686L64HLmjYKqdHWoQ&s",
  },
  {
    desc: "Directed: Tetsurō Araki",
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