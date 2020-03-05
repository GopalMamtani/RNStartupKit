import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function ModuleTwoComponent ({route,navigation}) {
    const ageCounterVal = useSelector(state => state.age.age);
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {ageCounterVal}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    <Text>{route.params.key}</Text>
    </View>
  );
}