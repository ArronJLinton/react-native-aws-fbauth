import React, { Component } from 'react';
import { Text } from 'react-native';
// objects imported with {} since they were exported as such
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false};

	onButtonPress = () => {
		const { email, password } = this.state;

		this.setState({error: '', loading: true});
		// firebaser signin authentication referencing database
		firebase.auth().signInWithEmailAndPassword(email, password)
			// promises in javascript is a construct for handling some amount of asynchronous code
			// if this request fails, we should attempt to create an account for them
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					// if whatever reason we are unable to create an account for the user, show an error message
					.catch(this.onLoginFail.bind(this));
			});
	}

// helper functions for successful/failed login
	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		})
	}

	onLoginFail(){
		this.setState({ error: 'Authentication Failed.', loading: false});
	}

// helper function for handling login button/spinner display
	renderButton(){
		if (this.state.loading){
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
			Login
			</Button>
		);
	}

	render(){

		const { errorMessage } = styles;

		return (
			<Card>

				<CardSection>
					<Input 
						value={this.state.email.toLowerCase()}
						label="Email"
						placeholder={"user@gmail.com"}
						// onChangeText callback function
						// we enter email as an argument and holds the text of what the user just typed
						onChangeText = {email => this.setState({ email })}
						secureTextEntry={false}
						/>
				</CardSection>

				<CardSection>
					<Input 
						value={this.state.password}
						label="Password"
						placeholder={"password"}
						// onChangeText callback function
						onChangeText = {password => this.setState({ password })}
						secureTextEntry={true}
						/>
				</CardSection>

				<Text style={errorMessage}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		);
	}
}

const styles = {
 errorMessage:{
 	fontSize: 20,
 	alignSelf: 'center',
 	color: 'red'
 }
};

