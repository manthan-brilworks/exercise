import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userDisplay}>
        <Image
          source={require("../assets/user-dummy-pic.png")}
          style={styles.userPic}
        />
        <View style={styles.userDetails}>
          <Text style={styles.usernameStyle}>Username</Text>
          <Text style={styles.emailStyle}>Email id</Text>
        </View>
      </View>
      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          <Icon name="account-outline" color={"black"} size={40} />
          <View>
            <Text style={styles.infoListText}>Account information</Text>
            <Text style={styles.description}>See your account details</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Icon name="cart-outline" color={"black"} size={40} />
          <View>
            <Text style={styles.infoListText}>Cart</Text>
            <Text style={styles.description}>See your cart items</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Ionicons name="location-outline" size={40} color="black" />
          <View>
            <Text style={styles.infoListText}>Address</Text>
            <Text style={styles.description}>See your Address</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <Icon name="format-list-bulleted" color={"black"} size={40} />
          <View>
            <Text style={styles.infoListText}>Orders</Text>
            <Text style={styles.description}>See your Orders list</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Icon name="logout" color={"black"} size={40} />
          <View>
            <Text style={styles.infoListText}>Logout</Text>
            <Text style={styles.description}>See your Orders list</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  userDisplay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e3b1b1",
    borderRadius: 15,
    padding: 20,
  },
  userPic: {
    height: 80,
    width: 80,
  },
  userDetails: {
    marginLeft: 20,
  },
  usernameStyle: {
    fontSize: 30,
  },
  mainListContainer: {
    marginTop: 30,
  },
  listContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  infoListText: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "400",
  },
  description: {
    marginLeft: 20,
    fontWeight: "300",
  },
});
