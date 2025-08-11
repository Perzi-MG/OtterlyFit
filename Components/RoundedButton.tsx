import { Pressable } from "react-native";
import React from "react";

export function RoundedButton({children}: React.PropsWithChildren<{}>) {
    return (
        <Pressable style={{backgroundColor: '#6200ee', padding: 10, borderRadius: 30, borderColor: '#fff'}}>
            {children}
        </Pressable>
    )
}