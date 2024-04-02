import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

// Como recebe apenas 1 parametro não prescisa usar os parenteses.
// Convenção de chamar props.
export default props => {
    // Aparece uma aviso na tela.
    console.warn(props)
    
    return (
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}

// Exemplo mais resumido:
// export default props => (
//         <Text style={Estilo.txtG}>
//             O valor {props.max} é maior que o valor {props.min}!
//         </Text>
// )



