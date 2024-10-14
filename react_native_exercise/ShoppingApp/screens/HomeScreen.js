import React from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import Product from "../data/products";
import ProductCard from "../componenets/ProductCard";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={Product}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            price={item.price}
            title={item.title}
            description={item.description}
            rating={item.rating.rate}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#dbc751",
  },
});

export default HomeScreen;
