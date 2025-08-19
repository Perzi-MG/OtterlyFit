import { Pressable, StyleSheet } from "react-native";
import React from "react";

export function RoundedButton({ children }: React.PropsWithChildren<{}>) {
    return (
        <Pressable className="bg-brandGray px-4 py-2 rounded-3xl w-20 h-12 justify-center items-center flex">
            {children}
        </Pressable>
    )
}