import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import Estilo from './estilo'

export default props => {
    
    const [nome, setNome ] = useState('Teste') 

    return (
        
        <View>
            <TextInput 
                placeholder='Digite seu Nome'
                value={nome}
                // Alterações nunca vão aconter da interface para o estado, mas sim do estado para a interface.
                onChangeText={nome => setNome(nome)}
            />

            <Text>O que esta sendo alterado: {nome}</Text>
        </View>
        
    )
}