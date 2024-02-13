import { Text, View } from "@tamagui/core";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8F1A0",
    padding: 20,
  },
  box: {
    flex: 1,
    backgroundColor: "#00a878",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 20,
    borderStyle: "solid",
    padding: 10,
  },
});

export default function Products() {
  const getCards = async (): Promise<any> => {
    return await axios
      .get(`https://api.magicthegathering.io/v1/cards?pageSize=10`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  const allCharacters = useQuery({
    queryKey: ["allCharacters"],
    queryFn: getCards,
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Prodotti</Text>
        <Link push href="/products/1">
          Prodotto 1
        </Link>
      </View>
    </View>
  );
}
