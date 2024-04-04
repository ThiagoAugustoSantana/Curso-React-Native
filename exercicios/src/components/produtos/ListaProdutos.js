import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {

// Uma forma de exibir uma lista usando a função map:
    // return (
    //     <>
    //         <Text style={Estilo.txtG} >
    //             Lista de Produtos
    //         </Text>
    //         {/* A função map retorna um novo array com as 
    //         modificações da função callback que é passada ao map. */}
    //         {produtos.map(p => {
    //             // Essa map ira transformar um array de objetos em um array de textos.
    //             // Nesse caso é preciso que cada elemento tenha uma key propria, caso der um alerta basta passar o id para string com backticks ``.
    //             return <Text key={p.id} >{p.id}) {p.nome} tem preço R$ {p.preco} </Text>
    //         })}
    //     </>

    // )

// Outra forma de exibir uma lista usando a função map:

    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id} >
                    {p.id}) {p.nome} tem preço R$ {p.preco} 
                </Text>    
            )    
        })
    }

    return (
        <>
            <Text style={Estilo.txtG} >
                Lista de Produtos
            </Text>
            {obterLista()}
        </>

    )

}