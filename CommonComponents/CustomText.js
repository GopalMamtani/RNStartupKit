import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomText extends React.Component { 
    constructor(props) {
      super(props);
    }
    render() { 
      return (
        <TouchableOpacity onPress={this.props.onPress}>
        <View>
        <Text style={{color: 'lightblue',fontWeight: 'bold'}}> {this.props.title}
        </Text> 
        </View> 
        </TouchableOpacity>
      );
    }
  }
  CustomText.propTypes = { title: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired };