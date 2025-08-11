import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './Components/Hello';
import { RoundedButton } from './Components/RoundedButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Hello/>
      <RoundedButton>
        <Text>Press Me</Text>
      </RoundedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
