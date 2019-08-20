import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, AsyncStorage, Image, SafeAreaView, TouchableOpacity, Platform, TouchableWithoutFeedback } from "react-native";

const { width } = Dimensions.get("window");

class DrawerComponent extends Component {
	goToHome = () => {
		this.props.navigation.navigate("HomePage");
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<SafeAreaView style={styles.drawer} forceInset={{ horizontal: "never" }}>
					<View style={styles.drawerHeader}>
						<Image style={styles.logoStyle} source={require("@assets/images/logo.png")} />
					</View>
					<TouchableOpacity onPress={this.goToHome} style={styles.drawerButton}>
						<Text style={styles.drawerLabel}>Home Page</Text>
						<Image style={styles.arrowIcon} source={require("@assets/images/right-arrow.png")} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")} style={styles.drawerButton}>
						<Text style={styles.drawerLabel}>Profile</Text>
						<Image style={styles.arrowIcon} source={require("@assets/images/right-arrow.png")} />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.goToSettings} style={styles.drawerButton}>
						<Text style={styles.drawerLabel}>Settings</Text>
						<Image style={styles.arrowIcon} source={require("@assets/images/right-arrow.png")} />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.logoutApp} style={styles.drawerButton}>
						<Text style={styles.drawerLabel}>Logout</Text>
						<Image style={styles.arrowIcon} source={require("@assets/images/right-arrow.png")} />
					</TouchableOpacity>
				</SafeAreaView>
			</View>
		);
	}
}
export default DrawerComponent;

const styles = StyleSheet.create({
	drawer: {
		flex: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 15
	},
	drawerLabel: {
		marginVertical: 28,
		color: "#fff",
		fontWeight: "600",
		fontSize: 16
	},
	logoText: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "700",
		marginLeft: 15
	},
	logoStyle: {
		height: 50,
		width: 180
	},
	drawerHeader: {
		flexDirection: "row",
		marginBottom: 20,
		alignItems: "center",
		marginTop: Platform.OS === "ios" ? 40 : 0
	},
	drawerButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	arrowIcon: {
		height: 13,
		width: 13
	}
});
