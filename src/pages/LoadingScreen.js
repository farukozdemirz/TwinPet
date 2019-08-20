import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { colors, style } from "@assets/style/colors";
var Spinner = require("react-native-spinkit");

class LoadingScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Spinner style={styles.spinner} isVisible={true} size={100} type={"Circle"} color={"#F35D2A"} />
			</View>
		);
	}
}
export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.darkPink
	}
});
