import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { colors, style } from "@assets/style/colors"
import { ProfileDetail } from "./index";

const { width } = Dimensions.get("window");

class BottomWrapper extends Component {
    state = {
        profilePictures: [
            {
                small: [
                    require("@assets/images/dog4.jpg"),
                    require("@assets/images/dog5.jpg"),
                    require("@assets/images/dog6.jpg"),
                    require("@assets/images/dog7.jpg"),
                ],
                big: [
                    require("@assets/images/dog1.jpg"),
                    require("@assets/images/dog2.jpg"),
                    require("@assets/images/dog3.jpg"),
                ]
            }
        ],
        profileDetail:false
    }

    openDetail = () => {
        this.props.openProfileDetail()
    };
    
   

    render() {
        const { } = style;
        const { bigImage, smallImage, galleryWrapper } = styles;
        return (
            <React.Fragment>
                <View style={styles.container}>
                {this.state.profilePictures.map((x, i) => (
                    <View key={i} style={galleryWrapper}>
                        <View>
                            {x.big.map((a, b) => (
                                <TouchableOpacity onPress={this.openDetail} key={b}>
                                    <Image style={bigImage} source={a} />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View >
                            {x.small.map((y, z) => (
                                <TouchableOpacity onPress={this.openDetail} key={z}>
                                    <Image style={smallImage} source={y} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
            {this.state.profileDetail ? <ProfileDetail /> : null}
            </React.Fragment>
        );
    }
}
export { BottomWrapper };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    bigImage: {
        margin: 5,
        borderRadius: 10,
        width: width / 2 - 20,
        height: width / 1.8,

    },
    smallImage: {
        margin: 5,
        borderRadius: 10,
        width: width / 2 - 20,
        height: width / 2.5,
    },
    galleryWrapper: {
        flexDirection: "row"
    }
});