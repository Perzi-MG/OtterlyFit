import { Text, View } from "react-native";
import { RoundedButton } from "./RoundedButton";
import Card from "./Card";
import { LinearGradient } from "expo-linear-gradient";
import { MenuIcon, SearchIcon } from "../assets/Icons/icons";

export default function MainCard() {
    return (
        <View className="rounded-[40px] w-full overflow-hidden">
            <LinearGradient
                colors={['#E3E2A9', '#BFC8B5', '#C9CBD7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}
            >
                <View className='flex-1 flex-col gap-6 z-20'>
                    <View className='flex flex-row justify-between items-center pt-safe'>
                        <RoundedButton>
                            <MenuIcon/>
                        </RoundedButton>
                        <RoundedButton>
                            <Text className="text-lightBlue font-semibold">Foto</Text>
                        </RoundedButton>
                    </View>
                    <View className='flex flex-row justify-between items-center'>
                        <Text className='text-4xl font-light'>
                            Bienvenido
                        </Text>
                        <RoundedButton>
                            <SearchIcon/>
                        </RoundedButton>
                    </View>
                    <Text className='text-4xl font-semibold -mt-5'>Mike!</Text>
                    <Card />
                </View>
            </LinearGradient>
        </View>
    )
}