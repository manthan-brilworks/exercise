import { StyleSheet, TouchableOpacity } from "react-native";

function Card({ children, style, onPress }) {
  return (
    <>
      <TouchableOpacity style={[styles.card, { style }]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "100%",
    backgroundColor: "rgb(222, 227, 225)",
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
  },
});

export default Card;
