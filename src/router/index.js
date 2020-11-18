import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Main = createStackNavigator();
import Carousel from '../screens/carousel';

class MainStack extends React.Component {
  render() {
    return (
      <Main.Navigator>
        <Main.Screen
          name="Carousel"
          component={Carousel}
          options={{
            headerShown: false
          }}
        />
      </Main.Navigator>
    );
  }
}

export {MainStack};
