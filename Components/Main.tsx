import { Text, View } from 'react-native';
import { RoundedButton } from '.././components/RoundedButton';
import { OptionsSVG } from '.././assets/options';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Main() {
    return (
        <SafeAreaProvider>
            <View className='flex-1 flex-col bg-brandGray gap-5'>
                <View className='flex flex-row justify-between items-center px-6 pt-safe'>
                    <RoundedButton>
                        <Text className="text-white font-semibold">Hola</Text>
                    </RoundedButton>
                    <RoundedButton>
                        <OptionsSVG width={20} height={20}/>
                    </RoundedButton>
                </View>
            </View>
        </SafeAreaProvider>
    );
}