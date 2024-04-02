import React from "react";
import { Button } from "react-native";

export default props => {

    function executar() {
        console.warn('Exec #01!!!')
    }

    return (

        <>
            <Button
                title="Executar #01"
                // Deve-se passar a função como referencia e não executa-la:
                // onPress={executar()} // Forma Errada!
                onPress={executar}
            />

            {/* Outra forma de usar o botão: */}
            <Button
                title="Executar #02"
                onPress={function() {
                    console.warn('Exec #02!!!')
                }}
            />

            {/* O mesmo butão anterior so que com arrow function: */}
            <Button
                title="Executar #03"
                onPress={() => console.warn('Exec #03!!!')}
            />
        </>
    )
}
