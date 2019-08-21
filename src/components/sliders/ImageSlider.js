import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Users = [
	{
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
		animal: "dog"
	}
];

class ImageSlider extends Component {
	renderContent = () => {
		return Users.map((item, i) => (
			<View style={{ flex: 1 }} key={i}>
				{item.images.map((x, y) => (
					<React.Fragment>
						<Image key={y} source={x.image} style={{ flex: 1, height: "100%", width: width, resizeMode: "cover", position: "absolute" }} />
						<Text>{item.name}</Text>
					</React.Fragment>
				))}
			</View>
		));
	};

	render() {
		return <View style={styles.container}>{this.renderContent()}</View>;
	}
}
export default ImageSlider;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
