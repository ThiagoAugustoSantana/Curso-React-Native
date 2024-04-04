import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    // Exemplo sem renderização condicional:
    // if (num % 2 === 0) {
    //     return (
    //         <View>
    //             <Text style={Estilo.txtG} >O resultado é:</Text>
    //             <Text style={Estilo.txtG} >Par</Text>
    //         </View>
    //     )
    // } else {
    //     return (
    //         <View>
    //             <Text style={Estilo.txtG} >O resultado é:</Text>
    //             <Text style={Estilo.txtG} >Impar</Text>
    //         </View>
    //     )
    // }

    // Exemplo com renderização condicional:
        return (
            <View>
                <Text style={Estilo.txtG} >O resultado é:</Text>
                {/* Usando um operador ternario: */}
                {num % 2 === 0
                    ? <Text style={Estilo.txtG} >Par</Text>
                    : <Text style={Estilo.txtG} >Impar</Text>
                    // Caso não queira retornar nada:
                    // : false
                }
            </View>
        )
}





