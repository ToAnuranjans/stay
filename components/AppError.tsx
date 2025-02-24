import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface AppErrorProps {
    message?: string;
    onRetry?: () => void;
}

const AppError: React.FC<AppErrorProps> = ({
    message = 'No search results found.',
    onRetry
}) => {
    return (
        <View style={styles.container}>
            {/* No Search Result Image */}
            <Image source={require('@/assets/images/search-not-found.png')} style={styles.image} />
            {onRetry && (
                <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                    <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        objectFit: 'contain',
    },
    message: {
        fontSize: 18,
        color: '#333',
        marginTop: 10,
        textAlign: 'center',
    },
    retryButton: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    retryText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default AppError;
