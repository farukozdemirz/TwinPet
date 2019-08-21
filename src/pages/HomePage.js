import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components";
import { colors, style } from "@assets/style/colors";
import LinearGradient from "react-native-linear-gradient";
import { ProfilePage } from "./index";
import SwipePage from "../../SwipePage";

class HomePage extends Component {
	render() {
		const { containerStyle, gradientStyle } = style;
		return (
			<React.Fragment>
				<Header message navigation={this.props.navigation} />
				<LinearGradient colors={[colors.orange, "#d63031"]} style={gradientStyle}>
					<View style={styles.container}>
						<SwipePage />
					</View>
				</LinearGradient>
			</React.Fragment>
		);
	}
}
export { HomePage };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 6
	}
});
