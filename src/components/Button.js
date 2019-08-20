import React from "react";
import { TouchableOpacity, Text, Dimensions, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors,style} from "@assets/style/colors"

const { width } = Dimensions.get("window");

const Button = ({ onPress, loading, buttonText, height, color1, color2, aOpac }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={aOpac} style={styles.loginButton}>
			<LinearGradient colors={[color1, color2]} style={[styles.linearGradient, { height: height, borderRadius: height }]}>
				{!loading ? <Text style={[styles.buttonText,style.boldText]}>{buttonText}</Text> : <ActivityIndicator size="large" color={colors.darkGrey} />}
			</LinearGradient>
		</TouchableOpacity>
	);
};
const styles = {
	buttonText: {
		color: colors.darkGrey,
		fontSize: 17,
		fontWeight: "500"
	},
	linearGradient: {
		width: width - 30,
		justifyContent: "center",
		alignItems: "center"
	}
};
export { Button };
