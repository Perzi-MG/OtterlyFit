import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Text, Card, useTheme, IconButton } from 'react-native-paper';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase'; // Asegúrate de que la ruta sea correcta
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
};

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    if (!email || !pass) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, pass);
      } else {
        await createUserWithEmailAndPassword(auth, email, pass);
      }
      // Navegar a la pantalla principal de OtterlyFit
      //navigation.replace('Main');
    } catch (err: any) {
      let errorMessage = 'Ocurrió un error';
      
      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email inválido';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Usuario deshabilitado';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Usuario no encontrado';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Contraseña incorrecta';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'Este email ya está en uso';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña debe tener al menos 6 caracteres';
          break;
        default:
          errorMessage = 'Correo o contraseña incorrectos';
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ 
      padding: 20, 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#F5E6D3' // Color beige como en tu Main
    }}>
      <Card mode="contained" style={{ 
        backgroundColor: 'white', 
        borderRadius: 16,
        elevation: 4
      }}>
        <Card.Title
          title="OtterlyFit"
          subtitle={isLogin ? 'Inicia sesión para continuar' : 'Crea una cuenta para comenzar'}
          left={(props) => <IconButton {...props} icon="carrot" size={30} iconColor="orange" />}
          titleStyle={{ color: '#8B4513', fontWeight: 'bold', fontSize: 24 }}
          subtitleStyle={{ color: '#666' }}
        />
        <Card.Content>
          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            style={{ marginBottom: 10 }}
            disabled={isLoading}
          />
          <TextInput
            label="Contraseña"
            value={pass}
            onChangeText={setPass}
            secureTextEntry
            mode="outlined"
            style={{ marginBottom: 10 }}
            disabled={isLoading}
          />
          {error ? (
            <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
              {error}
            </Text>
          ) : null}
          <Button
            mode="contained"
            onPress={handleAuth}
            style={{ 
              marginBottom: 10, 
              borderRadius: 8,
              backgroundColor: '#8B4513'
            }}
            icon={isLogin ? 'login' : 'account-plus'}
            loading={isLoading}
            disabled={isLoading}
          >
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </Button>
          <Button
            onPress={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            mode="text"
            textColor="#8B4513"
            disabled={isLoading}
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}