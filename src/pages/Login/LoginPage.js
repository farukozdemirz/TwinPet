import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors, style } from "@assets/style/colors";
import LoginForm from "./LoginForm";
const { width } = Dimensions.get("window");

class LoginPage extends Component {
	render() {
		const {
			loginPageWrapper,
			imageStyle,
			imageWrapper,
			centerPadding,
			signUpText,
			bottomLine,
			registerWrapper,
			registerText,
			titleWrapper,
			socialButtonWrapper,
			socialButton,
			subContainer,
			bottomText,
			orWrapper,
			lineStyle,
			orTextStyle
		} = styles;
		const { containerStyle, titleStyle, boldText, mediumText, socialIcon } = style;
		return (
			<LinearGradient colors={[colors.orange, colors.pink]} style={loginPageWrapper}>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
					<ScrollView contentContainerStyle={{ paddingBottom: 30 }} style={containerStyle}>
						<View style={{ justifyContent: "flex-end", paddingBottom: 10 }}>
							<View style={imageWrapper}>
								<Image style={imageStyle} source={require("@assets/images/dog.png")} />
							</View>
							<View style={titleWrapper}>
								<Text style={[titleStyle, boldText]}>{/* Welcome to Pet Tinder */}</Text>
							</View>
							<LoginForm navigation={this.props.navigation} />
						</View>
						<View style={subContainer}>
							<Text style={[bottomText, mediumText]}>Forgot password?</Text>
							<View style={orWrapper}>
								<View style={lineStyle} />
								<Text style={orTextStyle}>Or</Text>
								<View style={lineStyle} />
							</View>
							<View style={socialButtonWrapper}>
								<TouchableOpacity onPress={this.facebookLogin} style={socialButton}>
									<Image style={socialIcon} source={require("@assets/images/facebook.png")} />
								</TouchableOpacity>
								<TouchableOpacity style={[socialButton, centerPadding]}>
									<Image style={socialIcon} source={require("@assets/images/google-plus.png")} />
								</TouchableOpacity>
								<TouchableOpacity style={socialButton}>
									<Image style={socialIcon} source={require("@assets/images/instagram.png")} />
								</TouchableOpacity>
							</View>
							<View style={bottomLine} />
							<View style={registerWrapper}>
								<Text style={registerText}>Already have an account?</Text>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
									<Text style={signUpText}>Sign up now</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</LinearGradient>
		);
	}
}

export { LoginPage };

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	loginPageWrapper: {
		flex: 1,
		width
	},
	imageWrapper: {
		alignItems: "center",
		marginTop: 20,
		marginLeft: -8
	},
	imageStyle: {
		height: 280,
		width: 220
	},
	titleWrapper: {
		alignItems: "center"
	},
	subContainer: {
		alignItems: "center",
		marginTop: 20
	},
	bottomText: {
		color: "#fff"
	},
	orWrapper: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	lineStyle: {
		width: width / 4,
		height: 1.5,
		backgroundColor: colors.darkGrey
	},
	orTextStyle: {
		paddingHorizontal: 10,
		fontSize: 15,
		color: "#fff",
		fontWeight: "600"
	},
	socialButtonWrapper: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	socialButton: {},
	centerPadding: {
		paddingHorizontal: 10
	},
	registerWrapper: {
		marginTop: 10,
		flexDirection: "row"
	},
	registerText: {
		color: "#fff",
		fontWeight: "500"
	},
	signUpText: {
		marginLeft: 5,
		fontWeight: "600",
		color: colors.darkGrey
	},
	bottomLine: {
		marginTop: 10,
		width: width / 1.2,
		height: 1.5,
		backgroundColor: colors.darkGrey
	}
});
