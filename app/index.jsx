import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import HotelCard from '../components/HotelCard';
import { useRouter } from 'expo-router';
import useHotelsQuery from '../hooks/useHotelsQuery';
import CircularLoader from '../components/CircularLoader';
import AppError from '../components/AppError';

function Home() {
	const { data: hotels, isLoading, isError } = useHotelsQuery();
	const router = useRouter();
	if (isLoading) {
		return <CircularLoader />;
	}
	if (isError) {
		return <AppError onRetry={() => router.replace('/')} />;
	}
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
