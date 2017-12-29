import React from 'react';
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
	{/* size property indicates whether or not we want a large/small spinner 
		- if we pass in a specified size, we use that; else set the size to large
	*/}
			<ActivityIndicator size={size || 'large'} />
		</View>


	);
};

const styles = {
	spinnerStyle:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };
