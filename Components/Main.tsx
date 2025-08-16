import { Image, Text, View } from 'react-native';
import { RoundedButton } from '.././components/RoundedButton';
import { OptionsSVG } from '../assets/Icons/options';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../assets/colors';
import { SearchIcon } from '../assets/Icons/search';
import MainCard from './MainCard';

export default function Main() {
    return (
        <SafeAreaProvider className=''>
            <MainCard/>
        </SafeAreaProvider>
    );
}