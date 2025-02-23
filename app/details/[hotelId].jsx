import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';

const Details = () => {
	const { hotelId, name, location, price, rating, imageUrl } = useLocalSearchParams();
	const navigation = useNavigation();

	// Dynamically set the page title with the hotel name
	useEffect(() => {
		if (name) {
			navigation.setOptions({ title: name });
		}
	}, [navigation, name]);

	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.location}>{location}</Text>
			<Text style={styles.price}>Price: ${price} per night</Text>
			<Text style={styles.rating}>Rating: ⭐ {rating}</Text>
		</View>
	);
};

export default Details;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		backgroundColor: '#fff',
	},
	image: {
		width: '100%',
		height: 250,
		borderRadius: 10,
		marginBottom: 16,
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	location: {
		fontSize: 18,
		color: 'gray',
		marginBottom: 8,
	},
	price: {
		fontSize: 18,
		color: '#333',
		marginBottom: 8,
	},
	rating: {
		fontSize: 18,
		color: '#f39c12',
	},
});
