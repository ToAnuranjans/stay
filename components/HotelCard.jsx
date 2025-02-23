import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const HotelCard = ({ name, location, price, rating, imageUrl, onPress }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.location}>{location}</Text>
				<Text style={styles.price}>${price} per night</Text>
				<Text style={styles.rating}>⭐ {rating}</Text>
			</View>
			<TouchableOpacity onPress={() => onPress()}>
				<Text style={styles.button}>Book Now</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HotelCard;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: '#fff',
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		margin: 10,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 250,
	},
	infoContainer: {
		padding: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	location: {
		fontSize: 14,
		color: '#666',
		marginVertical: 2,
	},
	price: {
		fontSize: 16,
		color: '#28a745',
		fontWeight: 'bold',
	},
	rating: {
		fontSize: 14,
		color: '#ff9800',
		marginTop: 5,
	},
	button: {
		backgroundColor: '#0a7ea4',
		color: '#fff',
		textAlign: 'center',
		padding: 20,
		fontSize: 16,
		fontWeight: 'bold',
		borderRadius: 5,
		marginTop: 10,
	},
});
