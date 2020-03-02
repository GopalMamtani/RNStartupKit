import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import ModuleTwoComponent from './js/Module2/ModuleTwoComponent';

import configureStore from './store/configureStore';

const store = configureStore()
const stack = createStackNavigator();

const RNRedux = () => (
    <Provider store = { store }>
       <NavigationContainer>
         <stack.Navigator initialRouteName="App">
            <stack.Screen name="App" component={App}/>
            <stack.Screen name="Module2" component={ModuleTwoComponent}/>
         </stack.Navigator>
       </NavigationContainer>
    </Provider>
  )

AppRegistry.registerComponent(appName,() => RNRedux);