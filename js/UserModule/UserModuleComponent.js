import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Text, Button } from 'react-native';
import { connect } from "react-redux";
import { View} from 'react-native';
import  * as userActionCreators from '../UserModule/UserReducer';

class UserModuleComponet extends Component { 

  _getCallUserApi = () =>  {
    alert('hh');
    // return () => {
    //     this.props.userActionCreators.userApiRequest();
    //     fetch('http://localhost:8080/users')
    //     .then(res => {
    //       alert(res);
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         this.props.userActionCreators.userApiSuccess();
    //         return res;
    //     })
    //     .catch(error => {
    //         this.props.userActionCreators.userApiFailure(error);
    //     })
    // }
    return dispatch => {
      dispatch(this.props.userActionCreators.userApiRequest());
      fetch('http://localhost:8080/users')
    .then(res => {
      console.log(res.json());
        if(res.error) {
            throw(res.error);
        }
        dispatch(this.props.userActionCreators.userApiSuccess());
        return res;
    })
    .catch(error => {
      dispatch(this.props.userActionCreators.userApiFailure(error));
    })
  }
}
  render() {

    return (
      <View >
        <Text>User Data{this.props.age}</Text>
        <Button onPress={() => this._getCallUserApi()} title="User a data le aao" color="red" />
        <Text>aaja</Text>
        </View>

    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.main.age,
    userData: state.user.apiData,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  userActionCreators: userActionCreators
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModuleComponet); 