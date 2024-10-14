import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CustomDrawerContent() {
  const navigation = useNavigation();

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerItems}>
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../assets/user-dummy-pic.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.drawerItemText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerItems: {
    paddingTop: 20,
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    fontSize: 16,
    color: "#000",
  },
});

export default CustomDrawerContent;
