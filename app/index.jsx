import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import HotelCard from '../components/HotelCard';
import { useRouter } from 'expo-router';
import { hotels } from '../data/hotels';

function Home() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<FlatList
				data={hotels}
				renderItem={({ item: hotel }) => (
					<HotelCard
						onPress={() =>
							router.navigate({
								pathname: `/details/${hotel.hotelId}`,
								params: {
									name: encodeURIComponent(hotel.name),
								},
							})
						}
						name={hotel.name}
						location={hotel.location}
						price={hotel.price}
						rating={hotel.rating}
						imageUrl={hotel.imageUrl}
					/>
				)}
				keyExtractor={(hotel) => hotel.hotelId.toString()}
				style={{ width: '100%' }}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: 10,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Home;
