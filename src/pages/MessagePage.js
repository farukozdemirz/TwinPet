import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import { Header } from "../components";
import { colors, style } from "@assets/style/colors"
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const contactsList = [
    {
        p_picture: require("@assets/images/beagle.jpg"),
        name: "Helen Gilbert",
        lastMessage:"Lorem ipsum dolor sit amet",
        key: "1"
    },
    {
        p_picture: require("@assets/images/bloodhound.jpg"),
        name: "Emilie McDiarmid",
        lastMessage:"Lorem ipsum dolor sit amet",
        key: "2"
    },
    {
        p_picture: require("@assets/images/buldog.jpg"),
        name: "Sandra Paver",
        lastMessage:"Lorem ipsum dolor sit amet",
        key: "3"
    },
    {
        p_picture: require("@assets/images/chihuahua.jpg"),
        name: "Nancy Ocrevan",
        lastMessage:"Lorem ipsum dolor sit amet",
        key: "4"
    },
    {
        p_picture: require("@assets/images/dog2.jpg"),
        name: "Clayton Omulaney",
        lastMessage:"Lorem ipsum dolor sit amet",
        key: "5"
    },

];

class MessagePage extends Component {
    state = {
        search: "",
        text: "",
        data: "",
        coupling:[
            {
                image:require("@assets/images/dog3.jpg")
            },

            {
                image:require("@assets/images/dog5.jpg")
            },
            {
                image:require("@assets/images/dog6.jpg")
            },
            {
            },
            {
            },
            {
            }
        ]
    };


    filter(text) {
        const newData = contactsList.filter(function (item) {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
            text: text
        });
    }

    componentDidMount() {
        this.setState({
            data: contactsList
        });
    }
    render() {
        const { containerStyle, gradientStyle } = style
        return (
            <React.Fragment>
                <Header backIcon navigation={this.props.navigation} />
                <LinearGradient colors={[colors.orange, "#d63031",]} style={gradientStyle}>
                        <ScrollView style={containerStyle}>
                            <View style={{ marginTop: 15 }}>
                                <Ionicons name="md-search" style={styles.searchIcon} />
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="Search"
                                    placeholderTextColor="#fff"
                                    style={styles.inputStyle}
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={this.state.text}
                                    onChangeText={text => this.filter(text)}
                                />
                            </View> 
                            <Text style={styles.messagesText}>
                                Coupling
                            </Text>
                            <ScrollView contentContainerStyle={{justifyContent:"space-between",flexDirection:"row",}} showsHorizontalScrollIndicator={false} horizontal={true}>
                            {this.state.coupling.map((x,i)=>(
                                <TouchableOpacity key={i} style={styles.couplingButton}>
                                    <Image style={styles.couplingImage} source={x.image} />
                                </TouchableOpacity>
                            ))}
                            </ScrollView>
                            <Text style={styles.messagesText}>
                                Messages
                            </Text>
                          
                                <FlatList
                                    data={this.state.data}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            key={item.returnKeyType}
                                            style={styles.contactWrapper}
                                        >
                                            <Image
                                                style={styles.profilePicture}
                                                source={item.p_picture}
                                            />
                                            <View>
                                            <Text style={styles.profileName}>{item.name}</Text>
                                            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                        </ScrollView>
                </LinearGradient>
            </React.Fragment>
        );
    }
}
export { MessagePage };

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        height: 45,
        backgroundColor: "#c0392b",
        paddingLeft: 15,
        borderRadius: 30,
        width: width - 30,
        color: "#fff",
        fontSize: 15,
        paddingLeft: 45
    },
    contactsListWrapper: {
        paddingBottom: 50
    },
    contactWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25
    },
    profileName: {
        fontSize: 16,
        marginLeft: 15,
        color: "#fff",
        fontWeight: "700"
    },
    searchIcon: {
        color: "#fff",
        fontSize: 30,
        left: 15,
        top: 8,
        position: "absolute",
        zIndex: 9999
    },
    profilePicture: {
        height: 70,
        borderRadius: 35,
        width: 70
    },
    lastMessage:{
        fontSize:14,
        marginLeft: 15,
        color:colors.darkGrey
    },
    messagesText:{
        fontSize:16,
        color:"#fff",
        marginBottom:15,
        marginTop:15,
        fontWeight:"600",
    },
    couplingButton:{
        paddingRight:15,
    },
    couplingImage: {
        height:70,
        width:70,
        borderRadius:35,
        backgroundColor:"rgba(0, 0, 0, 0.3)"

    }
});
