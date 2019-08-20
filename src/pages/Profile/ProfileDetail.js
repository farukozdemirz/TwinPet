import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Animated, Easing, Platform } from "react-native";
import Swiper from "react-native-swiper";
import { colors, style } from "@assets/style/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

class ProfileDetail extends Component {
	constructor(props) {
		super(props);
		this.animatedValue = new Animated.Value(1);
		this.state = {
			listSlider: [
				{
					image1: require("@assets/images/dog4.jpg"),
				},
				{
					image1: require("@assets/images/dog5.jpg"),
				},
				{
					image1: require("@assets/images/dog6.jpg"),
				},
				{
					image1: require("@assets/images/dog7.jpg"),
				},
				{
					image1: require("@assets/images/dog1.jpg"),
				},
				{
					image1: require("@assets/images/dog2.jpg"),
				},
				{
					image1: require("@assets/images/dog3.jpg"),
				},
			],
			animation: false,
		};
	}

	likeButton = () => {
		this.setState({
			likeStatus: !this.state.likeStatus
		});
	};

	componentWillMount() {
		this.state.index = this.props.index;
	}

	commentButton = () => {
		this.setState({
			commendStatus: !this.state.commendStatus
		});
	};

	personButton = () => {
		this.setState({
			personStatus: !this.state.personStatus
		});
	};

	fadeAnimation = () => {
		this.setState(
			{
				animation: !this.state.animation
			},
			() => {
				if (this.state.animation) {
					Animated.timing(this.animatedValue, {
						toValue: 0,
						duration: 400,
						// delay: 200,
						easing: Easing.linear,
						useNativeDriver: true
					}).start();
				} else {
					Animated.timing(this.animatedValue, {
						toValue: 1,
						duration: 400,
						// delay: 200,
						easing: Easing.linear,
						useNativeDriver: true
					}).start();
				}
			}
		);
    };
    
	onClose = () => {
		this.props.onClose();
	};
  
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation !== nextState.animation) {
            return false;
        }
        return true;
    }

	render() {
		const Content = props => (
			<TouchableOpacity onPress={this.fadeAnimation} activeOpacity={1} style={{ flex: 1 }}>
				<Image style={styles.sliderImage} source={props.source.image1} />
			</TouchableOpacity>
		);
		const animatedStyle = {
			opacity: this.animatedValue
        };
		return (
			<View style={styles.detailWrapper}>
				<Swiper  loop={false} showsPagination={false} showsButtons={false}>
					{this.state.listSlider.map((x, i) => (
						<Content key={i} source={x} />
					))}
				</Swiper>
				<Animated.View style={[styles.detailFooter, animatedStyle]}>
					<TouchableOpacity onPress={this.likeButton} style={styles.buttonStyle}>
						<FontAwesome style={styles.buttonIcon} name={!this.state.likeStatus ? "heart-o" : "heart"} />
						<Text style={styles.buttonText}>14</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.commentButton} style={styles.buttonStyle}>
						<FontAwesome style={styles.buttonIcon} name={!this.state.commendStatus ? "comment-o" : "comment"} />
						<Text style={styles.buttonText}>14</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.personButton} style={styles.buttonStyle}>
						<FontAwesome style={styles.buttonIcon} name={!this.state.personStatus ? "user-o" : "user"} />
						<Text style={styles.buttonText}>14</Text>
					</TouchableOpacity>
				</Animated.View>
				<Animated.View style={[styles.detailHeader, animatedStyle]}>
					<TouchableOpacity onPress={this.onClose}>
						<Text style={styles.headerText}>Close</Text>
					</TouchableOpacity>
				</Animated.View>
			</View>
		);
	}
}
export {ProfileDetail};

const styles = StyleSheet.create({
	detailWrapper: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
        bottom: 0,
        zIndex:9999
	},
	sliderImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: "cover"
	},
	detailHeader: {
		paddingHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: Platform.OS === "ios" ? 60 : 45,
		backgroundColor: "#d63031",
		position: "absolute",
		top: 0,
		width,
		zIndex: 9999,
		paddingTop: Platform.OS === "ios" ? 30 : 0
	},
	detailFooter: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		height: 45,
		backgroundColor: "#d63031",
		position: "absolute",
		bottom: 0,
		width,
		zIndex: 9999
	},
	detailFooter2: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		height: 45,
		backgroundColor: colors.darkBackground,
		position: "absolute",
		top: 0,
		width,
		zIndex: 9999
	},
	headerText: {
		fontSize: 16,
		color: "#fff"
	},
	buttonStyle: {
		flexDirection: "row",
		alignItems: "center"
	},
	buttonText: {
		paddingLeft: 5,
		color: "#a0a4b1"
	},
	buttonIcon: {
		color: "#fff",
		fontSize: 20
	}
});
