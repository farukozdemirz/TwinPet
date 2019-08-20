import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Header } from "../../components";
import { colors, style } from "@assets/style/colors"
import LinearGradient from "react-native-linear-gradient";
import {TopWrapper,BottomWrapper,ProfileDetail} from "./index";

class ProfilePage extends Component {
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
        ],
        profileDetail:false,
        
    }

    openProfileDetail = ( ) => {
        this.setState({
            profileDetail:!this.state.profileDetail
        })
    }
    onClose=()=>{
        this.setState({
            profileDetail:!this.state.profileDetail
        })
    }
    render() {
        const { containerStyle, gradientStyle,titleStyle,boldText } = style
        return (
            <React.Fragment>
              <Header navigation={this.props.navigation}/>
                <LinearGradient colors={[colors.orange, "#d63031",]} style={gradientStyle}>
                    <ScrollView contentContainerStyle={{paddingBottom:50}} style={containerStyle}>
                        <TopWrapper />
                        <Text style={[titleStyle,boldText,{marginTop:20,marginBottom:10}]}> 
                            Posts
                        </Text>
                        <BottomWrapper openProfileDetail={this.openProfileDetail}/>
                    </ScrollView>
                </LinearGradient>
                {this.state.profileDetail ? <ProfileDetail onClose={this.onClose}  /> : null}
            </React.Fragment>
        );
    }
}
export { ProfilePage };

const styles = StyleSheet.create({
 
  
});