import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import ModuleOneComponent from './js/Module1/ModuleOneComponent'
import ModuleTwoComponent from './js/Module2/ModuleTwoComponent';

import configureStore from './store/configureStore';

const store = configureStore()
const stack = createStackNavigator();

const RNRedux = () => (
    <Provider store = { store }>
       <NavigationContainer>
         <stack.Navigator initialRouteName="Module1">
            <stack.Screen name="Module1" component={ModuleOneComponent}/>
            <stack.Screen name="Module2" component={ModuleTwoComponent}/>
         </stack.Navigator>
       </NavigationContainer>
    </Provider>
  )

AppRegistry.registerComponent(appName,() => RNRedux);