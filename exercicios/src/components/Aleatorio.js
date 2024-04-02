import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default props => {
    // As propriedades props são apenas para leitura, para se alterar deve-se colocar elas em alguma variavel. 

    // Utilizando o destructuring
    // const {min, max} = props
    const min = props.valorMin
    const max = props.valorMax
    const result = Math.floor(Math.random() * (max - min) ) + min
    //console.warn(result)

    return (
        <Text style={Estilo.txtG}>
            O valor gerado foi {result}!
        </Text>
    )
}