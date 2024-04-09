import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from '../estilo'

import MegaNumero from "./MegaNumero";

// Ate então viu-se componenetes baseados em função, agora serão baseados em classe.

export default class Mega extends Component {

    // Formas de inicializar um estado:
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // Outra forma:
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //             qtdeNumeros: props.qtdeNumeros + 1000
    //         }
    // }

    // Alterar valores:
    alterarQtdeNumeros = (qtde) => {
        // Para passar uma string para numerico basta colocar o sinal de + na frente.
        this.setState({ qtdeNumeros: +qtde })
    }

    // Gerar numeros:
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // Opção 1:
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // Opção 2:
    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state
    //     const numeros = []

    //     for(let i = 0; i < qtdeNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }

    //     numeros.sort((a, b) => a - b)

    //     this.setState({ numeros })
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG} >
                    {/* Acessando os parametros que foram passados. */}
                    {/* Assim como em JS usa-se o this para acessar a classe. */}
                    {/* Gerador de Mega-Sena {this.props.qtdeNumeros} */}

                    Gerador de Mega-Sena
                    {/* {this.state.qtdeNumeros} */}
                </Text>

                {/* Componente controlado: */}
                <TextInput
                    // Um pouco de estilo:
                    // Quando clicar para digitar sobe o teclado numerico em vez do de texto.
                    keyboardType="numeric"
                    // Coloca uma borda inferior.
                    style={{ borderBottomWidth: 1 }}

                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumeros}
                />

                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />

                {/* <Text>
                    {this.state.numeros.join(', ')}
                </Text> */}

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}









