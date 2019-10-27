import React, { Component } from 'react';
import { View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Sdata from './sqldata/Sdata';
// import Image2 from './sqldata/imagePost/image3'


export default class App extends Component {
  static navigationOptions = {
    header: null
}
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Sdata/>
      </View>
    );
  }
}
