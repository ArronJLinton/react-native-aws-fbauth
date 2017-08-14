import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, containerStyle, labelStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}> {label}</Text>
			<TextInput
				value={value}
				style={inputStyle}
				onChangeText={onChangeText}
				autoCorrect={false}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				/>
		</View>
	);
};

const styles ={
	containerStyle:{
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center' 
	},
// label and inputStyle are children of the container
// when determining the width, add up flex values to determine proportions
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		borderLeftWidth: 1,
	},
	inputStyle:{
		color: '#000',
		fontSize: 18,
		paddingRight: 5,
		paddingLeft: 5,
		lineHeight: 23,
		flex: 2
	}
};

export { Input };