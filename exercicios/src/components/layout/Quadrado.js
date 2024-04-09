import React from 'react'
import { View } from 'react-native'

export default props => {
    const lado = props.lado || 50

    return (
        // Definindo o style inline:
        <View style={{
            // Para usar na Aula FlexBoxV2 e FlexBoxV3 o alignItems: 'stretch', deve-se comentar as propiedades abaixo. 
            height: lado,
            width: lado,

            // Receber a cor como parametro:
            backgroundColor: props.cor || '#000'
        }}/>
    )
}