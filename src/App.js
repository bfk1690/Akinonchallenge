import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './router';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {};



  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
     
    );
    
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);