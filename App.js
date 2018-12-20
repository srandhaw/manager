import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/index.js'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'

class App extends Component{

  componentWillMount(){

var config = {
    apiKey: "AIzaSyC-5jSGUdAOqMxU0Gohc92Yh97URrEFTDQ",
    authDomain: "manager-8504a.firebaseapp.com",
    databaseURL: "https://manager-8504a.firebaseio.com",
    projectId: "manager-8504a",
    storageBucket: "manager-8504a.appspot.com",
    messagingSenderId: "67127488965"
  };
  firebase.initializeApp(config);

  }

  render(){
    return(
      <Provider store = {createStore(reducers)}>
      <LoginForm/>
      </Provider>
    )
  }
}

export default App