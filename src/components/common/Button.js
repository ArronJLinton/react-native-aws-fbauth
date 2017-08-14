import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, buttonText } = styles;

	return (
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={buttonText}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		// expand to fill as much content as it possible can
		flex: 1,
		// only position itself using flex-box rules
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};


// Must export the component as an object
export { Button };
