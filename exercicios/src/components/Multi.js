import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

// Formas de exportar componenetes:

// Quando se tem uma função default ela não precisa ser nomeada.
export default function () {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

// Quando o componenete não é default é preciso nomeá-lo
export function Comp1() {
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.txtG}>Comp #02</Text>
}

// Outra forma:

// export { Comp1, Comp2}


