import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { colors, style } from "@assets/style/colors"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

class TopWrapper extends Component {
    state = {
        userProfile: [
            {
                picture: require("@assets/images/pp-2.jpg"),
                name: "Beverly Washington",
                type: "Golden",
                likes: 55,
                coupling: 34,
                tracing: 212
            }
        ]
    }
    render() {
        const { containerStyle, gradientStyle } = style
        const { profileTopWrapper, profileImageStyle,informationWrapper, userNameWrapper, userName, informationText, informationNumber, typeName, profileTopInformation } = styles
        return (
            <React.Fragment>
                {this.state.userProfile.map((x, i) => (
                    <React.Fragment key={i}>
                        <View style={profileTopWrapper}>
                            <TouchableOpacity>
                                <Image style={styles.profilePicture} source={x.picture} />
                                <FontAwesome style={{fontSize:24,color:"#fff",position:"absolute",right:0,bottom:0}} name={"plus-circle"} />
                            </TouchableOpacity>
                            <View style={userNameWrapper}>
                                <Text style={userName}>
                                    {x.name}
                                </Text>
                                <Text style={typeName}>
                                    {x.type}
                                </Text>
                            </View>
                        </View>
                        <View style={profileTopInformation}>
                            <View style={informationWrapper}>
                                <Text style={informationNumber}>
                                    {x.likes}
                                </Text>
                                <Text style={informationText}>
                                    Like
                                    </Text>
                            </View>
                            <View style={informationWrapper}>
                                <Text style={informationNumber}>
                                    {x.coupling}
                                </Text>
                                <Text style={informationText}>
                                    Coupling
                                    </Text>
                            </View>
                            <View style={informationWrapper}>
                                <Text style={informationNumber}>
                                    {x.tracing}
                                </Text>
                                <Text style={informationText}>
                                    Tracing
                                    </Text>
                            </View>
                        </View>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}
export { TopWrapper };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilePicture: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    profileTopWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center"
    },
    userNameWrapper: {
        marginLeft: 10
    },
    userName: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600"
    },
    typeName: {
        fontSize: 16,
        color: "#fff"
    },
    profileTopInformation: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    informationText: {
        fontSize: 16,
        color: "#fff",
    },
    informationNumber: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
        paddingBottom: 5
    },
    informationWrapper:{
        alignItems: "center",
        borderBottomWidth: 1,
        width:width/5,
        paddingBottom:5,
        borderBottomColor:"#fff"
    }
});