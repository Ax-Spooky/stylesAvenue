
import  React from 'react';
import {View} from 'react-native';
import Logg from './Components/Hoam/Logg.js';
import Home from './Components/Hoam/Home.js';
import  Cart from './Components/Hoam/Cart.js';
import  Last from './Components/Hoam/Last.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>    
      <Stack.Screen name="Logg" component={Logg}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
      <Stack.Screen name="Cart" component={Cart}  options={{ headerShown: false }}/>
      <Stack.Screen name="Last" component={Last}   options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
      // <View>
      //   <Home/>
      // </View>
      //  
    
  );
}

export default App;
