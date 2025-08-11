import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from './components/RoundedButton';
import { OptionsSVG } from './assets/options';
import "./global.css";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black gap-5'>
      <StatusBar style="auto" />
      <RoundedButton>
        <Text className="text-white font-semibold">Hola</Text>
      </RoundedButton>
      <RoundedButton>
        <OptionsSVG width={20} height={20} color={"#fff"}/>
      </RoundedButton>
    </View>
  );
}