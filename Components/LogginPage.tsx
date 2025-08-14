import { Text, View, Alert } from 'react-native';
import { OptionsSVG } from '../assets/Icons/options';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase'; // Ajusta la ruta según tu estructura
import { useAuth } from '../components/AuthContext'; // Ajusta la ruta según tu //  estructura
// ...other imports

import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

type RoundedButtonProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

export const RoundedButton = ({ children, onPress, style }: RoundedButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {children}
        </TouchableOpacity>
    );
};
export default function Main() {
    const { user } = useAuth();

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Estás seguro que quieres cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Cerrar sesión',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await signOut(auth);
                            // La navegación se manejará automáticamente por el AuthContext
                        } catch (error) {
                            Alert.alert('Error', 'No se pudo cerrar sesión');
                        }
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaProvider>
            <View className='flex-1 flex-col bg-beige gap-5'>
                <View className='flex flex-row justify-between items-center px-6 pt-safe'>
                    <RoundedButton onPress={handleLogout}>
                        <Text className="text-white font-semibold">
                            {user?.email ? `Hola ${user.email.split('@')[0]}` : 'Hola'}
                        </Text>
                    </RoundedButton>
                    <RoundedButton onPress={() => {}}>
                        <OptionsSVG width={20} height={20} color={"#fff"} />
                    </RoundedButton>
                </View>
                
                {/* Aquí puedes agregar más contenido de tu app */}
                <View className="flex-1 justify-center items-center px-6">
                    <Text className="text-2xl font-bold text-center mb-4">
                        ¡Bienvenido a OtterlyFit! 🦦
                    </Text>
                    <Text className="text-gray-600 text-center">
                        Tu app de fitness está lista para comenzar
                    </Text>
                </View>
            </View>
        </SafeAreaProvider>
    );
}