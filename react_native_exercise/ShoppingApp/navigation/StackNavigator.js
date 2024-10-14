import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

import ProductDetailScreen from "../screens/ProductDetailScreen";
import DrawerNavigator from "./DrawerNavigator";
import CartContext from "../context/CartContextProvider";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const navigation = useNavigation();
  return (
    <CartContext>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </CartContext>
  );
}
