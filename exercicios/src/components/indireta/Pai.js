import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

// Na comunicação indireta o Pai precisara de informações do filho.
export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        // A comunicação indireta consiste em se passar uma função como propriedade.
        <>
            <Text style={Estilo.txtG} >{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}