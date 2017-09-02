import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { firebaseApp } from './authentication'

import styles from '../../styles'

// import { Navigator } from 'react-native-deprecated-custom-components'

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      result: ''
    }
  }
  signUp() {
    if(this.state.password === this.state.confirmPassword) {
      let { email, password } = this.state
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => this.setState({result: error.message}))
      // do stuff
    } else {
      // set result of state to password and confirm passowrd need to match
      this.setState({result: 'Password & confirmation must match.'})
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={(text) => this.setState({confirmPassword: text})}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.signUp()}
        >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.links}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Text style={styles.link}>Already a member? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
