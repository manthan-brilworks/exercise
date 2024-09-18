import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function Card({ style, image, cityName, description }) {
  return (
    <>
      <View style={styles.card}>
        <ImageBackground source={image} style={[styles.image, style]}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            style={styles.fav}
          />

          <BlurView intensity={80} style={styles.text}>
            <Text style={styles.title} numberOfLines={2}>
              {cityName}
            </Text>
            <Text numberOfLines={3} style={styles.description}>
              {description}
            </Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={"white"}
              style={{ width: 30 }}
            />
          </BlurView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 10,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 6,
    borderRadius: 25,
    borderCurve: 25,
  },
  fav: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    color: "white",
    borderRadius: 50,
    backgroundColor: "rgba(246, 239, 243, 0.5)",
    elevation: 2,
  },
  text: {
    bottom: 0,
    position: "absolute",
    backfaceVisibility: "visible",
    backgroundColor: "rgba(246, 239, 243, 0.5)",
    padding: 10,
    width: "100%",
  },
  title: {
    fontSize: 30,
    color: "rgb(248, 250, 240 )",
    fontWeight: "500",
  },
  description: {
    color: "white",
    fontSize: 20,
  },
});
