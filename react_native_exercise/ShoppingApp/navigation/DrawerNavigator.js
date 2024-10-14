import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useCart } from "../context/CartContextProvider";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomDrawerContent from "../componenets/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  const navigation = useNavigation();
  const { clearItem } = useCart();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="black"
                style={{ paddingRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => clearItem()}>
              <AntDesign
                name="delete"
                size={24}
                color="black"
                style={{ paddingRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
