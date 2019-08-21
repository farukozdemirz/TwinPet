import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableWithoutFeedback } from "react-native";
import { colors, style } from "@assets/style/colors";
import { fonts } from "./src/assets/style/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import LinearGradient from "react-native-linear-gradient";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const Users = [
	{
		id: "1",
		images: [
			{
				image: require("@assets/images/dog6.jpg")
			},
			{
				image: require("@assets/images/buldog.jpg")
			},
			{
				image: require("@assets/images/beagle.jpg")
			},
			{
				image: require("@assets/images/havanese.jpg")
			},
			{
				image: require("@assets/images/bloodhound.jpg")
			}
		],
		cender: "female",
		name: "Jasmine",
		type: "Golden",
		animal: "dog",
		age: 1,
		location: 12
	},

	{
		id: "2",
		images: [
			{
				image: require("@assets/images/buldog.jpg")
			},
			{
				image: require("@assets/images/dog6.jpg")
			},
			{
				image: require("@assets/images/beagle.jpg")
			},
			{
				image: require("@assets/images/havanese.jpg")
			},
			{
				image: require("@assets/images/bloodhound.jpg")
			}
		],
		cender: "female",
		name: "Bentley",
		type: "Buldog",
		animal: "dog"
	},
	{
		id: "3",
		images: [
			{
				image: require("@assets/images/beagle.jpg")
			},
			{
				image: require("@assets/images/buldog.jpg")
			},
			{
				image: require("@assets/images/dog6.jpg")
			},
			{
				image: require("@assets/images/havanese.jpg")
			},
			{
				image: require("@assets/images/bloodhound.jpg")
			}
		],
		cender: "male",
		name: "Henry",
		type: "Beagle",
		animal: "dog"
	},

	{
		id: "5",
		images: [
			{
				image: require("@assets/images/havanese.jpg")
			},
			{
				image: require("@assets/images/buldog.jpg")
			},
			{
				image: require("@assets/images/beagle.jpg")
			},
			{
				image: require("@assets/images/dog6.jpg")
			},
			{
				image: require("@assets/images/bloodhound.jpg")
			}
		],
		cender: "female",
		name: "Rudy",
		type: "Havanese",
		animal: "dog"
	},
	{
		id: "6",
		images: [
			{
				image: require("@assets/images/bloodhound.jpg")
			},
			{
				image: require("@assets/images/buldog.jpg")
			},
			{
				image: require("@assets/images/beagle.jpg")
			},
			{
				image: require("@assets/images/havanese.jpg")
			},
			{
				image: require("@assets/images/dog6.jpg")
			}
		],
		cender: "female",
		name: "Rudy",
		type: "Bloodhound",
		animal: "dog"
	}
];

export default class SwipePage extends PureComponent {
	constructor() {
		super();
		this.position = new Animated.ValueXY();
		this.state = {
			currentIndex: 0,
			imageIndex: 0
		};

		this.rotate = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: ["-10deg", "0deg", "10deg"],
			extrapolate: "clamp"
		});

		this.rotateAndTranslate = {
			transform: [
				{
					rotate: this.rotate
				},
				...this.position.getTranslateTransform()
			]
		};

		this.likeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [0, 0, 1],
			extrapolate: "clamp"
		});
		this.dislikeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 0],
			extrapolate: "clamp"
		});

		this.nextCardOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 1],
			extrapolate: "clamp"
		});
		this.nextCardScale = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0.8, 1],
			extrapolate: "clamp"
		});
	}

	componentWillMount() {
		this.PanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 150) {
					Animated.spring(this.position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
					}).start(() => {
						this.setState(
							{
								currentIndex: this.state.currentIndex + 1,
								imageIndex: 0
							},
							() => {
								this.position.setValue({ x: 0, y: 0 });
							}
						);
					});
				} else if (gestureState.dx < -150) {
					Animated.spring(this.position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
					}).start(() => {
						this.setState(
							{
								currentIndex: this.state.currentIndex + 1,
								imageIndex: 0
							},
							() => {
								this.position.setValue({ x: 0, y: 0 });
							}
						);
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4
					}).start();
				}
			}
		});
	}

	componentWillUpdate(nextState, prevState) {
		let currentIndex = prevState.currentIndex;
	}
	onTouchEnd = (e, index, images, currentIndex) => {
		let locationX = e.nativeEvent.locationX;

		if (currentIndex === this.state.currentIndex) {
			if (SCREEN_WIDTH / 2 < locationX) {
				this.setState({
					imageIndex: index + 1 >= images.length ? 0 : index + 1
				});
			} else {
				this.setState({
					imageIndex: index - 1 <= 0 ? images.length - 1 : index - 1
				});
			}
		}
	};

	renderUsers = () => {
		return Users.map((item, i) => {
			if (i < this.state.currentIndex) {
				return null;
			} else if (i == this.state.currentIndex) {
				return (
					<Animated.View
						{...this.PanResponder.panHandlers}
						key={item.id}
						style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 170, width: SCREEN_WIDTH - 12, padding: 0, position: "absolute" }]}
					>
						<View style={styles.cender}>
							<Image style={styles.cenderIcon} source={item.cender === "female" ? require("@assets/images/femenine.png") : require("@assets/images/masculine.png")} />
						</View>
						<Animated.View style={[styles.likeView, { opacity: this.likeOpacity }]}>
							<Text style={styles.likeText}>LIKE</Text>
						</Animated.View>
						<Animated.View style={[styles.nopeView, { opacity: this.dislikeOpacity }]}>
							<Text style={styles.nopeText}>NOPE</Text>
						</Animated.View>
						<View style={styles.paginationWrapper}>
							{item.images.map((x, i) => (
								<View
									key={i}
									style={[
										styles.paginationIcon,
										{
											width: SCREEN_WIDTH / item.images.length - 10,
											marginRight: i === item.images.length - 1 ? 10 : 0,
											marginLeft: i === 0 ? 10 : 0,
											opacity: i === this.state.imageIndex ? 1 : 0.6
										}
									]}
								/>
							))}
						</View>
						{item.images.map(
							(x, y) =>
								this.state.imageIndex === y && (
									<React.Fragment key={y}>
										<View onTouchEndCapture={e => this.onTouchEnd(e, y, item.images, this.state.currentIndex)} style={styles.touchedView}>
											<Image style={styles.touchedImage} source={x.image} />
											<LinearGradient colors={["transparent", "rgba(0, 0, 0, 0.5)"]} style={styles.userInformation}>
												<View style={styles.informationTop}>
													<Text style={styles.userName}>{item.name}</Text>
													<Text style={styles.userAge}>{item.age}</Text>
												</View>
												<View style={styles.informationBottom}>
													<EvilIcons name="location" size={20} color="#fff" />
													<Text style={styles.userLocation}>{item.location} kilometre uzaklıkta</Text>
												</View>
											</LinearGradient>
										</View>
									</React.Fragment>
								)
						)}
					</Animated.View>
				);
			} else {
				return (
					<Animated.View
						{...this.PanResponder.panHandlers}
						key={item.id}
						style={[
							{
								opacity: this.nextCardOpacity,
								transform: [{ scale: this.nextCardScale }],
								height: SCREEN_HEIGHT - 170,
								width: SCREEN_WIDTH - 12,
								padding: 0,
								position: "absolute"
							}
						]}
					>
						<View style={styles.cender}>
							<Image style={styles.cenderIcon} source={item.cender === "female" ? require("@assets/images/femenine.png") : require("@assets/images/masculine.png")} />
						</View>
						<Animated.View style={[styles.likeView, { opacity: 0 }]}>
							<Text style={styles.likeText}>LIKE</Text>
						</Animated.View>
						<Animated.View style={[styles.nopeView, { opacity: 0 }]}>
							<Text style={styles.nopeText}>NOPE</Text>
						</Animated.View>
						<View style={styles.paginationWrapper}>
							{item.images.map((x, i) => (
								<View
									key={i}
									style={[
										styles.paginationIcon,
										{
											width: SCREEN_WIDTH / item.images.length - 10,
											marginRight: i === item.images.length - 1 ? 10 : 0,
											marginLeft: i === 0 ? 10 : 0,
											opacity: i === this.state.imageIndex ? 1 : 0.6
										}
									]}
								/>
							))}
						</View>
						{item.images.map(
							(x, y) =>
								this.state.imageIndex === y && (
									<React.Fragment key={y}>
										<View onTouchEndCapture={e => this.onTouchEnd(e, y, item.images, this.state.currentIndex)} style={styles.touchedView}>
											<Image style={styles.touchedImage} source={x.image} />
											<Text style={{ fontSize: 14, color: "red" }}>sdsdsd</Text>
										</View>
									</React.Fragment>
								)
						)}
					</Animated.View>
				);
			}
		}).reverse();
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>{this.renderUsers()}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	cender: {
		position: "absolute",
		zIndex: 1001,
		right: 10,
		top: 20,
		backgroundColor: "#fff",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10
	},
	cenderIcon: {
		height: 36,
		width: 36
	},
	typeIconWrapper: {
		backgroundColor: "#fff",
		height: 55,
		width: 55,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		borderWidth: 5,
		borderColor: "#c0392b",
		position: "absolute",
		right: 40,
		top: -30
	},
	typeIcon: {
		height: 36,
		width: 36
	},
	imageButtonStyle: {
		width: "25%",
		height: "100%",
		zIndex: 9999,
		backgroundColor: "red"
	},
	touchedView: {
		width: "100%",
		height: "100%",
		zIndex: 100,
		justifyContent: "flex-end"
	},
	likeView: {
		transform: [{ rotate: "-30deg" }],
		position: "absolute",
		top: 50,
		left: 40,
		zIndex: 1000
	},
	likeText: {
		borderWidth: 3,
		borderColor: "green",
		color: "green",
		fontSize: 32,
		fontWeight: "800",
		padding: 10
	},
	nopeView: {
		transform: [{ rotate: "30deg" }],
		position: "absolute",
		top: 50,
		right: 40,
		zIndex: 1000
	},
	nopeText: {
		borderWidth: 3,
		borderColor: "red",
		color: "red",
		fontSize: 32,
		fontWeight: "800",
		padding: 10
	},
	touchedImage: {
		flex: 1,
		height: "100%",
		width: "100%",
		resizeMode: "cover",
		borderRadius: 10,
		position: "absolute"
	},
	paginationIcon: {
		height: 3,
		backgroundColor: "#fff",
		position: "relative",
		zIndex: 9999
	},
	paginationWrapper: {
		position: "absolute",
		top: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%"
	},
	userInformation: {
		paddingTop: 10,
		paddingLeft: 20,
		paddingBottom: 20
	},
	informationTop: {
		flexDirection: "row",
		alignItems: "center"
	},
	userName: {
		color: colors.white,
		fontSize: fonts.xl,
		fontWeight: "600",
		letterSpacing: 1.1,
		textShadowColor: "rgba(0, 0, 0, 0.4)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 6
	},
	userAge: {
		color: colors.white,
		fontSize: fonts.lg,
		marginLeft: 10,
		marginTop: 3,
		letterSpacing: 1.1,
		textShadowColor: "rgba(0, 0, 0, 0.4)",
		textShadowOffset: { width: -1, height: -1 },
		textShadowRadius: 6
	},
	informationBottom: {
		flexDirection: "row",
		alignItems: "center"
	},
	userLocation: {
		color: colors.white,
		fontSize: fonts.md,
		marginLeft: 5
	}
});
