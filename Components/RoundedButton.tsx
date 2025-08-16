import { Pressable, StyleSheet } from "react-native";
import React from "react";

export function RoundedButton({ children }: React.PropsWithChildren<{}>) {
    return (
        <Pressable className="bg-brandGray px-4 py-3 rounded-3xl min-w-20 max-w-32 max-h-12 items-center justify-center flex">
            {children}
        </Pressable>
    )
}