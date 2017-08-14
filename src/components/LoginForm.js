import React, { Component } from 'react';
// objects imported with {} since they were exported as such
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
	state = { email: '',
						password: ''
						}

	render(){

		const { textInput } = styles;

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
						style={textInput}
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
						style={textInput}
						secureTextEntry={true}
						/>
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>

			</Card>
		)
	}
}

const styles = {
 textInput: {
 	height: 20,
 	flex: 1,
 	width: null
 }
}

