import { View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useHotelDetailsQuery } from '../../hooks/useHotelsQuery';
import CircularLoader from '../../components/CircularLoader';
import HotelDetails from '../../components/HotelDetails';

const Details = () => {
	const { hotelId } = useLocalSearchParams();
	const navigation = useNavigation();
	const { data: hotel, isLoading } = useHotelDetailsQuery(hotelId);

	if (isLoading) {
		return <CircularLoader />;
	}

	// // Dynamically set the page title with the hotel name
	useEffect(() => {
		if (hotel.name) {
			navigation.setOptions({ title: hotel.name });
		}
	}, [navigation, hotel.name]);

	return (
		<View style={{ flex: 1 }}>
			<HotelDetails {...hotel} />
		</View>
	);
};

export default Details;
