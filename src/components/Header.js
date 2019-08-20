import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors, style } from "@assets/style/colors"

class Header extends Component {
	state = {
		messageStatus: true
	}
	openMessages = () => {
		requestAnimationFrame(() => {
			this.setState({
				messageStatus:false
			})
			this.props.navigation.navigate("Messages")
		});
	
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				{this.props.backIcon ? (
					<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.menuButton, Platform.OS === "ios" ? { marginTop: 15 }: { marginTop: 2 }]}>
						<FontAwesome name="chevron-left" style={{ fontSize: 20, color: "#fff" }} />
					</TouchableOpacity>
				) : (
						<TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={[styles.menuButton, Platform.OS === "ios" && { marginTop: 15 }]}>
							<Image style={styles.menuIcon} source={require("@assets/images/menu.png")} />
						</TouchableOpacity>
					)}
				{/* <Image style={styles.headerLogo} source={require("@assets/images/logo.png")} /> */}
				{this.props.message ? <TouchableOpacity onPress={this.openMessages} style={[styles.commentButton, Platform.OS === "ios" && { marginTop: 15 }]}>
					{this.state.messageStatus ? <React.Fragment>
						<FontAwesome style={styles.commentIcon} name={"comment"} />
						<View style={styles.dotStyle} />
					</React.Fragment> :
						<FontAwesome style={styles.commentIcon} name={"comment"} />
					}
				</TouchableOpacity> : null}
			</View>
		);
	}
}
export { Header };

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		backgroundColor: colors.darkPink,
		paddingTop: Platform.OS === "ios" ? 20 : null
	},
	headerImage: {
		width: 180,
		height: 50
	},
	menuButton: {
		position: "absolute",
		paddingLeft: 15,
		left: 0,
		paddingBottom: 14,
		top: 0,
		paddingTop: Platform.OS === "ios" ? 10 : 18
	},
	headerLogo: {
		height: 35,
		width: 125
	},
	menuIcon: {
		height: 24,
		width: 24
	},
	commentButton: {
		position: "absolute",
		paddingRight: 15,
		right: 0,
		paddingBottom: 14,
		top: 0,
		paddingTop: Platform.OS === "ios" ? 7 : 18
	},
	commentIcon: {
		fontSize: 24,
		color: colors.green
	},
	dotStyle: {
		height: 12,
		width: 12,
		backgroundColor: "red",
		borderRadius: 12,
		position: "absolute",
		right: 15,
		top: Platform.OS === "ios" ? 8 : 17
	}

});
