// Exibir listas Com FlatList:

import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtG} >
                Lista de Produtos V2
            </Text>

            <FlatList 
                data={produtos}
                // Para pegar a key dos elementos, precisa ser uma string:
                keyExtractor={i => `${i.id}`}
                // O renderItem recebe uma função com um objeto como parametro,
                // esse objeto possui um atributo item, pode-se referenciar 
                // o atributo item com outro nome, como foi feito nesse caso referenciando ele a p.
                renderItem={produtoRender}
            />
        </>

    )

}