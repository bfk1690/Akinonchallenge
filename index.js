

import React from 'react';
import { AppRegistry } from 'react-native';
import Project from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

export class App extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <Project />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => App);