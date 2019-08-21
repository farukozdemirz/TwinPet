import React, { Component } from "react";
import { Dimensions, ActivityIndicator, StyleSheet, View, AsyncStorage } from "react-native";
import { createAppContainer, createSwitchNavigator, DrawerItems, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from "react-navigation";
import { RegisterPage, LoginPage, HomePage, ProfilePage, MessagePage } from "../pages";
import DrawerComponent from "./DrawerComponent";
import { colors, style } from "@assets/style/colors";
import LoadingScreen from "../pages/LoadingScreen";

const { width } = Dimensions.get("window");

class Navigator extends Component {
	state = {};

	render() {
		return <AppContainer />;
	}
}
export default Navigator;

const AppStackNavigator = createStackNavigator(
	{
		HomePage: HomePage,
		Messages: MessagePage
	},
	{
		defaultNavigationOptions: {
			header: null
		}
	}
);

const AppDrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: AppStackNavigator,
			navigationOptions: {
				drawerLabel: "Home Page"
			}
		},
		Profile: {
			screen: ProfilePage,
			navigationOptions: {
				drawerLabel: "Profile"
			}
		}

		// },
		// Friends: {
		// 	screen: ContactsList,

		// 	navigationOptions: {
		// 		drawerLabel: "Friends"
		// 	}
		// },

		// }
	},
	{
		drawerWidth: width - 80,
		drawerBackgroundColor: "#c0392b",
		contentOptions: {
			activeTintColor: "#FFF",
			inactiveTintColor: "#FFF"
		},

		contentComponent: props => (
			<React.Fragment>
				<DrawerComponent {...props} />
			</React.Fragment>
		)
	}
);

const AuthStackNavigator = createStackNavigator(
	{
		Login: LoginPage,
		Register: RegisterPage
	},
	{
		defaultNavigationOptions: {
			header: null
		}
	}
);
const AppNavigator = createSwitchNavigator(
	{
		App: AppDrawerNavigator,
		Auth: AuthStackNavigator,
		AuthLoading: LoadingScreen
	},
	{
		initialRouteName: "App"
	}
);

const AppContainer = createAppContainer(AppNavigator);
