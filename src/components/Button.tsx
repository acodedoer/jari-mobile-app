import React, { PropsWithChildren } from "react"
import { TouchableOpacity, View } from "react-native"

export const Button:React.FC<PropsWithChildren> = ({children}) => {
    return(
        <TouchableOpacity>
            {children}
        </TouchableOpacity>
    )
}