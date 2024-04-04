import React from 'react'
import { Text } from 'react-native'

// import Membro from './Membro'

export default props => {
    return (
        <>
            {/* <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" /> */}

            {/* Pegando componentes dentro de outro: */ }
            <Text>[Inicio] Membros da família:</Text>
            {props.children}
            <Text>[Fim] Membros da família:</Text>
        </>
    )
}