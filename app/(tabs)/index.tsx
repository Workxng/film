import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCover from "../../components/FilmCover.js";

const CATEGORIES = [
  {
    id: "1",
    name: "Action",
  },
  {
    id: "2",
    name: "Animation",
  },
  {
    id: "3",
    name: "Sci-fi",
  },
  {
    id: "4",
    name: "Horror",
  },
  {
    id: "5",
    name: "Comedy",
  },
  {
    id: "6",
    name: "Mystery",
  },
  {
    id: "6",
    name: "Adventure",
  },
];


const DATA = [
  {
    desc: "Directed: Naoko Yamada",
    name: "A Silent Voice",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
  },
  {
    desc: "Directed: Makoto Shinkai",
    name: "Your Name",
    logo: "https://static.wikia.nocookie.net/kiminonawa/images/6/62/Kimi-no-Na-wa.-Visual.jpg",
  },
  {
    desc: "Directed: Tetsurō Araki",
    name: "Bubble",
    logo: "https://m.media-amazon.com/images/M/MV5BNjMzNmFjZWItMjZlZS00OTgwLTgwMmMtYTc5MTA0MTY2MGEwXkEyXkFqcGc@._V1_.jpg",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="p-4">
    <FlatList
      data={CATEGORIES}
      horizontal
      renderItem={({ item }) => (
        <Text className="m-2 border p-2 rounded-xl">{item.name}</Text>
      )}
      className="space-x-4"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
    <FlatList
      
      data={DATA}
      numColumns={2}
      renderItem={({ item }) => <FilmCover item={item} />}
      keyExtractor={(item) => item.desc}
    />
  </SafeAreaView>  );
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