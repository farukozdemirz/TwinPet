import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const colors = {
    green:"#badc58",
	blue:"#56B1D2",
	orange:"#e55039",
	pink:"#b71540",
    darkGrey:"#2d3436",
	darkBackground: "#0a1142",
	inputBackground: "#12194d",
	grey: "#a0a4b1",
	white: "#fff",
	borderColor: "rgba(0, 0, 0, 0.1)",
	deepCove: "#130f40",
	darkPink:"#d63031"
};

export const style = StyleSheet.create({
	containerStyle: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
	},
	gradientStyle:{
		flex:1
	},
	titleStyle:{
		fontSize:20,
		color:'#fff'
	},
	subTitleStyle:{
		fontSize:16,
		color:'#fff',
		marginTop:5,
		textAlign:'center'
	},
	boldText:{
		fontWeight:"700"
	},
	mediumText:{
		fontWeight:"500"
	},
	socialIcon:{
		height:42,
		width:42
	},
	labelStyle: {
		fontSize: 14,
		fontWeight: "600",
		color: "#fff",
		marginTop: 50,
		marginBottom: 20
	},
});
