import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainCard from './MainCard';
import { ScrollView, Text } from 'react-native';
import MainContent from './MainContent';

export default function Main() {
    return (
        <SafeAreaProvider className=''>
            <ScrollView className='h-full flex-1'>
                <MainCard />
                <MainContent/>
            </ScrollView>
        </SafeAreaProvider>
    );
}