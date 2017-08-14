import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
// header was exported as an object so we must import it as an object with {}
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
	componentWillMount() {
		// firebase initialization
		firebase.initializeApp({
    apiKey: 'AIzaSyBH6DT4ArdJOGlTfrJkAT99kk2va7mqoks',
    authDomain: 'react-native-auth-fade9.firebaseapp.com',
    databaseURL: 'https://react-native-auth-fade9.firebaseio.com',
    projectId: "react-native-auth-fade9",
    storageBucket: "react-native-auth-fade9.appspot.com",
    messagingSenderId: "165636776764"
  	});
	}



	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>

		)
	}
}
