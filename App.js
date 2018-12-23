import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers/index.js'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk'
import {View} from 'react-native'
import Router from './src/Router'

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
      <Provider store = {createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <View style = {{flex:1}}>
      <Router />
      </View>
      </Provider>
    )
  }
}

export default App
