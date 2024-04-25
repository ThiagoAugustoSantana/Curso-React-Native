import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default props => {
// Para descobrir o que esta sendo passado em props.
// console.warn(Object.keys(props))

export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                // Se o nome da propriedade da função for o mesmo dentro do objeto a ser atualizado, 
                // o JS entende, pela forma abaixo, que o elemento com o nome da propriedade deve ser atualizado.
                onChangeText={name => setUser({ ...user, name })}
                // Tambem pode ser feito da seguinte forma:
                // onChangeText={nome => setUser({ ...user, name: nome  })}
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o E-mail"
                value={user.email}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />

            <Button 
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})


