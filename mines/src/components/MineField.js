import React from "react";
import { View, StyleSheet } from "react-native";

import Field from "./Field";

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            // Para retornar arrays de componentes JSX é necessario atribuir uma chave para cada elemento.
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)}
            />
        })

        return <View key={r}
            style={{ flexDirection: "row", }}>{columns}</View>
    })

    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})









