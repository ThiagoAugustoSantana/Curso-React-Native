import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        // Por padrão a View é do tipo FlexBox.
        // A View vai ser o container e os Quadrado vão ser os item.
        <View style={style.FlexV1} >
            <Quadrado cor={'#ff801a'} />
            <Quadrado cor={'#50d1f6'} />
            <Quadrado cor={'#dd22c1'} />
            <Quadrado cor={'#8312ed'} />
            <Quadrado cor={'#36c9a7'} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        // O main axis em mobile por padrão é o vertical.
        // O container por padrao ira assumir o tamanho ocupado pelos item, logo o backgroundColor estara atras dos items.
        backgroundColor: '#000',
        flexGrow: 1,
        // justifyContent Funciona no main axis.
        // Por padrão é flex-start.
        justifyContent: 'flex-start',
        justifyContent: 'flex-end',
        justifyContent: 'center',
        justifyContent: 'space-around',
        // Espaçamento igual.
        justifyContent: 'space-evenly',
        justifyContent: 'space-between',
    }
})