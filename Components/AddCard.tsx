import { View, Text } from 'react-native'
export default function AddCard({ text1, text2, children }: { text1: string, text2: string, children?: React.ReactNode }) {
    return (
        <View className='w-32 h-32 bg-brandBlack rounded-3xl justify-between flex flex-col p-3'>
            <View className='flex items-end w-full'>
                {children}
            </View>
            <View className='flex flex-col justify-center items-start w-full'>
                <Text className='text-lightBlue text-xs'>{text1}</Text>
                <Text className='text-lightBlue font-bold text-xl'>{text2}</Text>
            </View>
        </View>
    )
}