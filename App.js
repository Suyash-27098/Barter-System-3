import React from 'react';
//import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import SignUpLoginScreen from './screens/signUpLoginScreen';
// import { AppDrawerNavigator } from './components/AppDrawerNavigator'
// import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <SignUpLoginScreen/>
  );
}


// const switchNavigator = createSwitchNavigator({
//   signUpLoginScreen:{screen: signUpLoginScreen},
// })

// const AppContainer =  createAppContainer(switchNavigator);
