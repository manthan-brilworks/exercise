import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useCart } from "../context/CartContextProvider";

const { width } = Dimensions.get("screen");

function CartItem({ item }) {
  const { incrementItemCount, decrementItemCount } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="center"
        />
        <View style={styles.details}>
          <Text style={styles.text_title}>{item.title}</Text>
          <Text style={styles.text_quantity}>Quantity: {item.count}</Text>
          <Text style={styles.text_price}>Price: ${item.price}</Text>
          <View style={styles.details_rating}>
           
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => decrementItemCount(item.id)}
                style={styles.buttonCounter}
              >
                <Text>{"-"}</Text>
              </TouchableOpacity>
              <Text style={styles.textCounter}>{item.count}</Text>
              <TouchableOpacity
                onPress={() => incrementItemCount(item.id)}
                style={styles.buttonCounter}
              >
                <Text>{"+"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.checkout}>
              <Text>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d7d9d7",
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 5,
  },
  card: {
    flexDirection: "row",
    width: width * 0.45,
    backgroundColor: "#f5f3f2",
    borderRadius: 12.5,
    margin: 10,
    paddingBottom: 10,
  },
  image: {
    overflow: "hidden",
    position: "relative",
    borderRadius: 25,
    height: 200,
    marginTop: 30,
    width: "100%",
  },
  details: {
    flexDirection: "column",
  },
  text_title: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  text_quantity:{
    fontWeight: "500",
    paddingLeft: 10,
    fontSize:15
  },
  text_price: {
    fontWeight: "700",
    paddingLeft: 10,
    fontSize:15
  },
  text_rating: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCounter: {
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "600",
    fontSize: 10,
    textAlign: "center",
  },
  textCounter: {
    paddingHorizontal: 15,
    fontWeight: "600",
    fontSize: 20,
  },
  checkout: {
    backgroundColor: "#66d98f",
    margin: 20,
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
});

export default CartItem;
