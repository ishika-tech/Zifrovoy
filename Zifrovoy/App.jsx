import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, OtpPage, TermsConditionPageFirst, TermsConditionPageTwo, Permission, TermsConditionPageThree } from './src/screens/index'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="OtpPage" component={OtpPage} options={{ headerShown: false }}  />
        <Stack.Screen name="TermsConditionPageFirst" component={TermsConditionPageFirst} options={{ headerShown: false }}  />
        <Stack.Screen name="TermsConditionPageTwo" component={TermsConditionPageTwo} options={{ headerShown: false }}  />
        <Stack.Screen name="TermsConditionPageThree" component={TermsConditionPageThree} options={{ headerShown: false }}  />
        <Stack.Screen name="Permission" component={Permission} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
