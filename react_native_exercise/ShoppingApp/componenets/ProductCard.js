import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("screen");

function ProductCard({ image, title, description, price, rating, onPress }) {
  return (
    <View style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.text_title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.text_description}>
          {description}
        </Text>
        <Text style={styles.text_price}>Price: ${price}</Text>
        <View style={styles.details_rating}>
          <Text style={styles.text_rating}>Rating: {rating}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.detailButton}>{`Details`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 10,
    width: width * 0.45,
    backgroundColor: "#f5f3f2",
    borderRadius: 12.5,
    margin: 9,
    paddingBottom: 10,
    borderColor: "red",
    elevation: 5,
    justifyContent: 'space-between',
  },
  image: {
    overflow: "hidden",
    borderRadius: 25,
    height: 150,
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  text_title: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  text_description: {
    marginTop: 3,
    paddingLeft: 10,
    fontSize:13
  },
  text_price: {
    marginTop: 3,
    fontWeight: "700",
    paddingLeft: 10,
    fontSize:13
  },
  text_rating: {
    marginTop: 3,
    paddingLeft: 10,
  },
  details_rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailButton: {
    color: "#3c78c2",
    marginLeft:20
  },
});

export default ProductCard;
