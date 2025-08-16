import { Text, View, Image } from "react-native";
import { RoundedButton } from "./RoundedButton";
import { OptionsSVG } from "../assets/Icons/options";
import { SearchIcon } from "../assets/Icons/search";
import { colors } from "../assets/colors";
<<<<<<< HEAD
import Card from "../Card";
=======
import Card from "./Card";
>>>>>>> origin/main
import { LinearGradient } from "expo-linear-gradient";

export default function MainCard() {
    return (
        <View className="rounded-[40px] h-[40%] w-full overflow-hidden">
            <LinearGradient
                colors={['#E3E2A9', '#BFC8B5', '#C9CBD7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}
            >
                <View className='flex-1 flex-col gap-6 z-20'>
                    <View className='flex flex-row justify-between items-center pt-safe'>
                        <RoundedButton>
                            <OptionsSVG width={20} height={20} color={colors.lightBeige} />
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
                            <SearchIcon width={24} height={24} color={colors.lightBlue} />
                        </RoundedButton>
                    </View>
                    <Text className='text-4xl font-semibold -mt-5'>Mike!</Text>
                    <Card />
                </View>
            </LinearGradient>
        </View>
    )
}