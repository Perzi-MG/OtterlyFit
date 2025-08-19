import { View, Text } from 'react-native'
import AddCard from './AddCard'
import { CheckIcon, MinusIcon, PlusIcon } from '../assets/Icons/icons'

type AddCardProps = {
    text1: string;
    text2: string;
    children?: React.ReactNode;
}

const AddCardContents: AddCardProps[] = [
    {
        text1: 'Agregar',
        text2: 'Cita',
        children: <PlusIcon />
    },
    {
        text1: 'Agregar',
        text2: 'Paciente',
        children: <PlusIcon />
    },
    {
        text1: 'Ver',
        text2: 'Algo',
        children: <CheckIcon/>
    }
]

export default function MainContent() {
    return (
        <View className='flex flex-row justify-between items-center p-4'>
            {AddCardContents.map((item, index) => (
                <AddCard key={index} text1={item.text1} text2={item.text2}>
                    {item.children}
                </AddCard>
            ))}
        </View>
    )
}