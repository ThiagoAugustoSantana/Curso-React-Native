import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        // A View vai ser o container e os Quadrado vão ser os item.
        <View style={style.FlexV2} >
            <Quadrado cor={'#ff801a'} />
            <Quadrado cor={'#50d1f6'} />
            <Quadrado cor={'#dd22c1'} />
            <Quadrado cor={'#8312ed'} />
            <Quadrado cor={'#36c9a7'} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        // Lembrar que tem o padding na View em App, logo não ira ate a borda.
        width: '100%',
        backgroundColor: '#000',

        // alignItems funciona no cros axis, para mobile é o eixo horizontal.
        alignItems: 'flex-start',
        alignItems: 'flex-end',
        // O baseline ira alinhar os item pela base.
        alignItems: 'baseline',
        // A largura do Quadrado deve estar livre para usar o stretch.
        alignItems: 'stretch',
        alignItems: 'center',

        // Usar os dois eixos:
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})