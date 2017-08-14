// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// make component
// always name the component the name of the file
// we pass in props to reference the props object from the parent component
const Header = (props) => {

	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

// all styles in react native uses camel casing rather than -
const styles = {
	viewStyle: {
		// neutral eggwhite color
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		// black color
		shadowColor: '#000',
		// dimensions of the shadow
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the component available to other parts of the app 
// Other files can new use this exported component
export  { Header };
