import * as React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function ModuleTwoComponent () {
  
    const ageCounterVal = useSelector(state => state.age.age);
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {ageCounterVal}</Text>
    </View>
  );
}