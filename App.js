import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/homeScreen";
import ColorsScreen from "./src/screens/colorsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Color: ColorsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
