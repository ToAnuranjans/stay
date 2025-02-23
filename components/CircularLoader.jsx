import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const CircularLoader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='#6200ea' />
		</View>
	);
};

export default CircularLoader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
