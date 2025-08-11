import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './Components/Hello';
import { RoundedButton } from './Components/RoundedButton';
import { OptionsSVG } from './assets/options';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Hello/>
      <RoundedButton>
        <Text style={{ color: "#fff" }}>Hola</Text>
      </RoundedButton>
      <RoundedButton>
        <OptionsSVG width={24} height={24} color={"#fff"}/>
      </RoundedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
