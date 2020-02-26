import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from "react-redux";
import { View, Button} from 'react-native';

class App extends Component { 
  render() {
    return (
      <View >
        
        <Button
         title = "RN Kit!"
         color = "red"
      />
          <Button onPress={this.props.onAgeUp} title="++++++++" color="red"/>
          <Text>Hello{this.props.age.age}</Text>
          <Button onPress={this.props.onAgeDown} title="------" color="red" />
          
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
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
