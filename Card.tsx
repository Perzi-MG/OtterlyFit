import { View, Text } from "react-native";

export default function Card() {
    return (
        <View className="w-full bg-brandGray rounded-[30px] flex-1 justify-between items-center flex-row p-7">
            <Text className="text-lg text-lightBeige">Próxima Cita</Text>
            <View className="flex flex-col gap-1">
                <Text className="text-lightBlue font-semibold text-2xl">Lunes</Text>
                <Text className="text-lightBlue font-semibold text-2xl">10:00 AM</Text>
            </View>
        </View>
    )
}