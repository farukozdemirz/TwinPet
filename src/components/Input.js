import React, { PureComponent } from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import {
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import { colors,  } from "@assets/style/colors";

const { width } = Dimensions.get("window");

class Input extends PureComponent {

  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
   
  };
  onTouchStart=()=>{
  }
  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <FormInput
        onTouchStart={this.onTouchStart}
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          placeholder={label}
          {...rest}
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholderTextColor={colors.grey}
        />
        {error && <FormValidationMessage containerStyle={styles.errorMessage} style={styles.errorMessage}>{error}</FormValidationMessage>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
		marginBottom: 20,
  },
  inputContainerStyle:{
		height: 45,
		backgroundColor: 'transparent',
		borderRadius: 45,
		width: width - 30,
        borderBottomWidth:0,
  },
  inputStyle:{
    height: 45,
    paddingLeft: 15,
    width: width - 30,
    fontWeight: "500",
    borderRadius:20,
    borderWidth:1,
    borderColor:'#fff',
    color: colors.white
  },
  errorMessage:{
    position:'absolute',
    bottom:-20
  }
});

export {Input};