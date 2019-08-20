import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Dimensions, Image, Animated, PanResponder,TouchableWithoutFeedback } from 'react-native';
import { colors, style } from "@assets/style/colors"

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
  
    { 
      id: "1",
      uri: require("@assets/images/dog6.jpg"),
      cender:"female",
      name:"Jasmine",
      type:"Golden",
      animal:"dog"
     },
    { 
      id: "2", 
      uri: require("@assets/images/buldog.jpg"),
      cender:"female",
      name:"Bentley",
      type:"Buldog",
      animal:"dog"
    },
    { 
      id: "3", 
      uri: require("@assets/images/beagle.jpg"),
      cender:"male",
      name:"Henry",
      type:"Beagle",
      animal:"dog"
    },
   
    { 
      id: "5", 
      uri: require("@assets/images/havanese.jpg") ,
      cender:"female",
      name:"Rudy",
      type:"Havanese",
      animal:"dog"
    },
    { 
      id: "6", 
      uri: require("@assets/images/bloodhound.jpg") ,
      cender:"female",
      name:"Rudy",
      type:"Bloodhound",
      animal:"dog"
    },
]

export default class SwipePage extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 150) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -150) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
            
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 170, width: SCREEN_WIDTH-30, padding: 0, position: 'absolute'}]}>
           <View style={styles.cender}>
             <Image style={styles.cenderIcon} source={item.cender === "female" ? require("@assets/images/femenine.png") : require("@assets/images/masculine.png")}/>
           </View>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
            </Animated.View>
            
            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
            </Animated.View>
            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />
            <View style={{alignItems:"center"}}>
            <View style={styles.informationWrapper}>
              <Text style={styles.userName}>
                  {item.name}
              </Text>
              <Text style={styles.userType}>
                  {item.type}
              </Text>
            </View>
            <View style={styles.typeIconWrapper}>
                <Image style={styles.typeIcon} source={require("@assets/images/paw-print-.png")} />
            </View>
            </View>
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
          {...this.PanResponder.panHandlers}
            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 170, width: SCREEN_WIDTH-30, padding: 0, position: 'absolute'
            }]}>
            <View style={styles.cender}>
             <Image style={styles.cenderIcon} source={item.cender === "female" ? require("@assets/images/femenine.png") : require("@assets/images/masculine.png")}/>
           </View>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
            </Animated.View>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>
              <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />
               <View style={{alignItems:"center"}}>
            <View style={styles.informationWrapper}>
              <Text style={styles.userName}>
                  {item.name}
              </Text>
              <Text style={styles.userType}>
                  {item.type}
              </Text>
            </View>
            <View style={styles.typeIconWrapper}>
                <Image style={styles.typeIcon} source={require("@assets/images/paw-print-.png")} />
            </View>
            </View>
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 15 }}>

        </View>
        <View style={{ flex: 1 ,}}>
          {this.renderUsers()}
        </View>
        <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.bottomButton}>
                <Image style={styles.closeIcon} source={require("@assets/images/close.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bottomButton,{marginHorizontal:25}]}>
                <Image style={styles.buttonIcon} source={require("@assets/images/star.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
                <Image style={styles.buttonIcon} source={require("@assets/images/like.png")} />
            </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cender:{
    position:"absolute",
    zIndex:1001,
    right:10,
    top:10,
    backgroundColor:"#fff",
    width:50,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
  },
  cenderIcon:{
    height:36,
    width:36
  },
  informationWrapper:{
    backgroundColor:"#fff",
    borderRadius:5,
    padding:10,
    width:SCREEN_WIDTH-70,
    marginTop:-10,
    borderTopWidth:8,
    borderColor:"#c0392b"
  },
  userName:{
    fontSize:18,
    fontWeight:"700",
    color:colors.darkGrey,
  },
  userType:{
    fontSize:18,
    fontWeight:"700",
    color:colors.grey
  },
  typeIconWrapper:{
    backgroundColor:"#fff",
    height:55,
    width:55,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    borderWidth:5,
    borderColor:"#c0392b",
    position:"absolute",
    right:40,
    top:-30
  },
  typeIcon:{
    height:36,
    width:36
  },
  buttonsWrapper:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:10
  },
  bottomButton:{
    height:50,
    width:50,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0, 0, 0, 0.3)"
  },
  buttonIcon:{
    height:30,
    width:30
  },
  closeIcon:{
    height:27,
    width:27
  }
});