/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

/**
 * reference: https://github.com/Alhydra/Multiple-Select-Checkbox-In-React-Native/blob/master/App.js
 */
import React, { createContext, useState } from "react";
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetUserDecisionAspects from './src/components/GetUserDecisionAspects';

export const myContext = createContext(undefined);

//Screen Two
const ScreenTwo = () => {
    const {selections, setSelections} = React.useContext<string[]>(myContext);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:"red"}}>Your Selected Items:</Text>
        <Text>{selections.toString()}</Text>
      </View>
    );
  };


const App = () => {
    const [selections, setSelections] = React.useState<string[]>([]);
    const optionsMenu = ['Campus Surrounding', 'Distance From home', 'National Rank', 'Department Rank', 'Faculty/Student Ratio']
    //const
    const Stack = createStackNavigator();
        return (
            <myContext.Provider value={{optionsMenu, selections, setSelections}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="College Decision" component={GetUserDecisionAspects} />
                    <Stack.Screen name="Next Step" component={ScreenTwo} />
                </Stack.Navigator>
            </NavigationContainer>
            </myContext.Provider>
        );
};

export default App;