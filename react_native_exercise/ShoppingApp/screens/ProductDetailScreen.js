import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../context/CartContextProvider";

function ProductDetailScreen({ route }) {
  const navigation = useNavigation();
  const item = route.params;

  const { addToCart } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>Details: {item.description}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          <Text style={styles.category}>Category: {item.category}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingR}>Rating Rate: {item.rating.rate}</Text>
            <Text style={styles.ratingStar}>{item.rating.ratingStar}</Text>
          </View>
          <Text style={styles.ratingC}>Rating Count: {item.rating.count}</Text>
          <Text style={styles.stock}>Available Stock: {item.stock}</Text>
          <Text style={styles.color}>Available Colours: {item.color}</Text>
          <View
            style={{
              backgroundColor: item.colorCode,
              height: 70,
              width: 70,
              borderRadius: 15,
              borderWidth: 1,
            }}
          ></View>
          <Text style={styles.material}>Material: {item.material}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonBackToHome}
        >
          <Text numOfLines={2} style={styles.buttonText}>
            Back to Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={styles.buttonAddtoCart}
        >
          <Text numOfLines={2} style={styles.buttonText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: "#f0efeb",
  },
  ratingR: {
    marginTop: 10,
    fontSize: 20,
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    marginTop: 10,
    fontSize: 20,
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  category: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "300",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingR: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
    color: "green",
  },
  ratingStar: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 20,
    color: "#d1be11",
  },
  ratingC: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  stock: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  color: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  colourCode: {
    height: 100,
    width: 100,
  },
  material: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },
  buttonAddtoCart: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f03224",
    width: "50%",
    height: 60,
  },
  buttonBackToHome: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24f027",
    width: "50%",
    height: 60,
  },

  buttonText: {
    alignContent: "center",
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
  },
});
export default ProductDetailScreen;
