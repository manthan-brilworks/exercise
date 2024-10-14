import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
