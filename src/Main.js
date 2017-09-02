import React, { Component } from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

import signIn from './components/auth/signin';
import signUp from './components/auth/signUp';

const routes = {
  signIn,
  signUp
}

export default class Main extends Component {
  render() {
    return(
      <Navigator
        initialRoute={{name: 'signIn'}}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene(route, navigator) {
    let Component = routes[route.name];

    return(
      <Component
        navigator={navigator}
      />

    )
  }
}
