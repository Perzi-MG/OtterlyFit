import Feather from '@expo/vector-icons/Feather';
import { colors } from '../colors';

export const MenuIcon = (props: any) => (
    <Feather name="menu" size={24} color={colors.lightBeige} {...props} />
)

export const SearchIcon = (props: any) => (
    <Feather name="search" size={24} color={colors.lightBlue} {...props} />
)

export const MinusIcon = (props: any) => (
    <Feather name="minus-circle" size={24} color={colors.lightBlue} {...props} />
)

export const PlusIcon = (props: any) => (
    <Feather name="plus-circle" size={24} color={colors.lightBlue} {...props} />
)

export const CheckIcon = (props: any) => (
    <Feather name="check-circle" size={24} color={colors.lightBlue} {...props}/>
)