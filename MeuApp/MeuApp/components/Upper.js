import React from 'react'
import { Text, View } from 'react-native'

function Upper(props) {
    const texto = props.children
    const textoMaisculo = texto.toUpperCase()

    return (
        <View>
            <Text style={props.style}>{textoMaisculo}</Text>
        </View>
    )
} 

export default Upper