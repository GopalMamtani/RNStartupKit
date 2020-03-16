import React, {Component} from 'react';
import { Text } from 'react-native';
import { useSelector,useDispatch } from "react-redux";
import { View, Button} from 'react-native';
import * as AgeActionCreators from './ModuleOneActions'

export default function ModuleOneComponent ({navigation}) { 
  const dispatch = useDispatch();
    return (
      <View >  
          <Button onPress={() => dispatch(AgeActionCreators.ageIncrement())} title="++++++++" color="red"/>
          <Text style = {{textAlign:'center'}}>Hello {useSelector(state => state.main.age)}</Text>
          <Button onPress={() => dispatch(AgeActionCreators.ageDecrement())} title="-----------" color="red" />
          <Button title="Take Me to screen 2" 
          onPress={() => navigation.navigate('Module2',{key:'passing this object from scrren one as route param'})} 
          color="green" />
        </View>
    
    );
}