import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { connect } from "react-redux";
import { View, Button} from 'react-native';
import * as AgeActionCreators from './ModuleOneActions'

class ModuleOneComponent extends Component { 
  render() {
    return (
      <View >
        
        <Button
         title = "RN Kit!"
         color = "red"
      />
          <Button onPress={this.props.AgeActionCreators.ageIncrement} title="++++++++" color="red"/>
          <Text>Hello {this.props.age.age}</Text>
          <Button onPress={this.props.AgeActionCreators.ageDecrement} title="-----------" color="red" />
          <Button title="Take Me to screen 2" onPress={() => this.props.handleNavigation.navigation.navigate('Module2')} color="green" />
        </View>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AgeActionCreators: bindActionCreators(AgeActionCreators, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleOneComponent);