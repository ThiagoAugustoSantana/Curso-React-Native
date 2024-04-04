import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

// Usando a renderização condicional para esse caso:
import If from './If'

// Dessa vez ira receber um objeto.
// Atribui um objeto vazio por padrão, caso não ache nada.
// export default ({ usuario = {} }) => {
export default props => {
    
    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email} >
                <Text style={Estilo.txtG} >Usuário Logado:</Text>
                <Text style={Estilo.txtG} >
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}