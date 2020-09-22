import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function ModuleTwoComponent ({route,navigation}) {
    const ageCounterVal = useSelector(state => state.main.age);
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {ageCounterVal}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
      <Button title="Get User Data" onPress={() => navigation.navigate('UserModule')}/>
    <Text>{route.params.key}</Text>
    </View>
  );
}