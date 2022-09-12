import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/HomeScreen";
//import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";

const AppNavigator = createStackNavigator(
{
	Home: HomeScreen,
	//Profile: ProfileScreen,
	NextScreen : SettingsScreen,
},
{
	defaultNavigationOptions: {
	headerStyle: {
		backgroundColor: "white",
	},
	headerTintColor: "#black",
  headerTitleAlign:'center'
	},
}
);
// // import App from "./Myntra";
// 	<App/>
const Navigator = createAppContainer(AppNavigator);

export default function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
