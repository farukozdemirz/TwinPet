import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { RegisterPage } from "./src/pages";
import Navigator from "./src/navigator/Navigator";


class App extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
  }
});