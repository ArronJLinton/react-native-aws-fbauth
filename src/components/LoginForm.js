import React, { Component } from 'react';
// objects imported with {} since they were exported as such
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
	state = { text: ''}

	render(){

		const { textInput } = styles;

		return (
			<Card>
				<CardSection>
					<Input 
						value={this.state.text}
						label="Email"
						// onChangeText callback function
						onChangeText = {text => this.setState({ text })}
						style={textInput}
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

