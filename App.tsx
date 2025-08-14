import "./global.css";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './components/navigation';
import { AuthProvider } from './components/AuthContext'; // Ajusta la ruta según tu estructura

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <MainNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}