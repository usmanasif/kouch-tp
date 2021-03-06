import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import GameScreen from "./src/screens/GameScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
)

export default createAppContainer(navigator);
