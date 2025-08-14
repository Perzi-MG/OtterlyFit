import { Pressable, StyleSheet } from "react-native";
import React from "react";

export function RoundedButton({ children }: React.PropsWithChildren<{}>) {
    return (
        <Pressable className="bg-brandBlack px-4 py-3 rounded-3xl max-w-30 items-center justify-center">
            {children}
        </Pressable>
    )
}