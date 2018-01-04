import React, { Component } from 'react';
import { View, Text } from 'react-native';
// local firebase library
import firebase from 'firebase';
// header was exported as an object so we must import it as an object with {}
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Amplify from "aws-amplify-react-native";

import aws_exports from "../aws-exports.js";

// AWS Mobile uses the open source AWS Amplify library to link your code to the AWS features configured for your app.
Amplify.configure(aws_exports);

export default class App extends Component {

// by default, app assumes you are not signed in
	state = { loggedIn: null }

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

		// code for firebase event handler
		// whenever the user signs in or signs out, this function will be called
		// if the user signed in, the user argument will be an object that represents the user
		// if they are sigining out, user will have a null value 
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({ loggedIn: true})
			}else{
				this.setState({ loggedIn: false})
			}
		});
	}

	renderContent(){
		switch (this.state.loggedIn) {
			case true:
				return (
				<Button 
					onPress={() => firebase.auth().signOut()}>
					Log Out
				</Button>
				);
			case false:
				return <LoginForm />;
			default: 
				return (
					<Spinner 
					size='large'
					style={styles.spinnerStyle}
				 />
			);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
					{this.renderContent()}
			</View>

		)
	}
}

const styles = {
	spinnerStyle:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 100
	}
};
