import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Dimensions, Alert, Animated, Text, Image, ScrollView } from 'react-native';
import { PanGestureHandler, State } from "react-native-gesture-handler";
const { width } = Dimensions.get('window');

import Datas from '../../integration-config.json';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedApi: null,
    };
  }

  componentDidMount() {
    this.checkApi();
    
  }
    
  checkApi = () => {
    switch(Datas.SELECTED_API) {
      case 'api1':
        this.setState({ images: Datas.API1, selectedApi: Datas.SELECTED_API }, () => {
          console.log(this.state.images)
        })
        break;
      case 'api2':
        this.setState({ images: Datas.API2, selectedApi: Datas.SELECTED_API }, () => {
          console.log(this.state.images)
        })
        break;
      case 'api3':
        this.setState({ images: Datas.API3, selectedApi: Datas.SELECTED_API }, () => {
          console.log(this.state.images)
        })
        break;
      default:
        Alert.alert("NUMBER NOT FOUND");
      }
  }

  onHandlerStateChange = (e) => {
    console.log(e)
  }

  render() {
    const { images, selectedApi } = this.state;
    return (
      <SafeAreaView style={s.container}>
        <PanGestureHandler onGestureEvent={this.onGestureEvent} onHandlerStateChange={this.onHandlerStateChange}>
          <Animated.View style={s.carouselWrapper}>
            <Animated.View style={[s.images]}>
              {selectedApi === 'api1' ?
                images.url.map((img, idx) => {
                  return (
                    <View style={s.image} key={idx.toString()}>
                      <Image style={s.carouselImage} source={{uri: img}} />
                    </View>
                  )
                })
                : selectedApi === 'api2'
                  ?
                  <Text>2</Text>
                  :
                  <Text>3</Text>
              }
             
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  images: {
    flexDirection: 'row',
  },  
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  carouselWrapper: {
    width,
  },
  carouselImage: {
    width,
    height: 300
  }
})