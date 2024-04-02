import React from "react";
import { View, Text } from "react-native";
import Estilo from './estilo'

export default props => (
    
    /* 
        Não se pode retornar dois ou mais elementos dessa forma:
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text> 
    */
    
// Uma forma de retornar mais de um elemento:
    // <React.Fragment>
    //     <Text style={Estilo.txtG}>{props.principal}</Text>
    //     <Text>{props.secundario}</Text>
    // </React.Fragment>
    
    // Outra forma (tambem é um fragment):
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
    
    // <View>
    //     <Text style={Estilo.txtG}>{props.principal}</Text>
    //     <Text>{props.secundario}</Text>
    // </View>

)
     



