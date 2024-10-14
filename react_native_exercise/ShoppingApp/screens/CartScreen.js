import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useCart } from "../context/CartContextProvider";
import CartItem from "../componenets/CartItem";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const { getCart } = useCart();
  const cartItems = getCart();
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {cartItems && cartItems.length > 0 ? (
          <View>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CartItem item={item} />}
            />
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              source={require("../assets/emptyCart.png")}
              style={styles.emptyCartImage}
            />
            <Text style={styles.emptyText}>Cart is Empty !</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.addItemButton}>Add Items to the Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0efeb",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    height: 200,
    width: 200,
    opacity: 0.7,
  },
  emptyText: {
    fontSize: 25,
    color: "red",
    fontWeight: "500",
  },
  addItemButton: {
    marginTop: 20,
    borderColor: "green",
    borderRadius: 15,

    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "lightgreen",
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    height: 100,
    width: 100,
  },
});
