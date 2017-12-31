import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    // make new web proj in firebase
    // const config = {
    //   apiKey: '',
    //   authDomain: '',
    //   databaseURL: '',
    //   projectId: '',
    //   storageBucket: '',
    //   messagingSenderId: ''
    // }
    // firebase.initializeApp(config)
  }

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={ store }>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
