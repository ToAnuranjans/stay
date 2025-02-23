import { useQuery, useQueryClient } from "@tanstack/react-query";
import { hotels } from '../data/hotels';

const fetchX = async (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () => hotels,
            });
        }, 5000);
    });
}

export default function useHotelsQuery() {
    return useQuery({
        queryKey: ['hotels'],
        queryFn: () => fetch('http://localhost:3000/hotels').then(res => res.json()),
    })
}

export function useHotelDetailsQuery(hotelId) {
    const client = useQueryClient();
    return useQuery({
        queryKey: ['hotels', hotelId],
        enabled: !!hotelId,
        initialData: () => {
            const hotels = client.getQueryData(['hotels']); // Ensure queryKey is an array
            if (!hotels) return undefined; // Avoid errors if data is not cached
            const hotel = hotels.find(hotel => hotel.hotelId == hotelId);
            return hotel;
        },
        placeholderData: () => ({
            name: 'Loading.....',
            location: 'Loading.....',
            price: 0,
            rating: 0,
            imageUrl: '',
        }),
        queryFn: () => fetch(`http://localhost:3000/hotels?hotelId=${hotelId}`).then(async res => {
            const data = await res.json();
            console.log('data', data);
            const hotel = data?.[0];
            hotel.name = hotel.name + ' (from server)';
            return hotel;
        }),
    })
}
