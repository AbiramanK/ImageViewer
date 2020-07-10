import React , {Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 
import {
  First,
  Second
} from './src/screens/Home'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

class App extends Component{
  render(){
    return(
      
      <NavigationContainer style={{margin:10}} >
        <Tab.Navigator  
                  tabBarOptions={{
                    activeTintColor:'blue',
                    inactiveTintColor:'black', 
                    labelStyle: { fontSize: 15 }, 
                    pressColor:'grey',
                    style: { backgroundColor: 'white' , margin:10,},
                    indicatorStyle: {
                      backgroundColor: 'blue',
                  }, 
                  }}
                >
          <Tab.Screen name="Nature" component={First} />
          <Tab.Screen name="Pets" component={Second} />
        </Tab.Navigator>
      </NavigationContainer> 
    ) 
  }
}
 

export default App;

