import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Store from './Store';
import StoreItemDetails from './StoreItemDetails';
import Cart from './Cart';


const Stack = createNativeStackNavigator();

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomePage"
        >
          
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name="Store" component={Store}/>
        <Stack.Screen name="StoreItemDetails" component={StoreItemDetails}/>
        <Stack.Screen name="Cart" component={Cart}/>
 

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
