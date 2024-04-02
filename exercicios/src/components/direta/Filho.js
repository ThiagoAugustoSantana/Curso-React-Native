import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

// Um componenete filho tambem pode ser um componenete pai de outro.
export default props => {
    return (
        <>
            <Text style={Estilo.txtG} >{props.a}</Text>
            <Text style={Estilo.txtG} >{props.b}</Text>
        </>
    )
}