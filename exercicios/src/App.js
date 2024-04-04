import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

// Aula 20:
// import Primeiro from './components/Primeiro'

// Aula 21:
// Como o componenete oficial foi exportado como default ele pode ser chamado dessa forma.
// import CompPadrao, { Comp1, Comp2} from './components/Multi'

// Aula 24:
// import MinMax from './components/MinMax'

// Aula 26 (Desafio Aleatorio):
// import Aleatorio from './components/Aleatorio'

// Aula 28:
// import Titulo from './components/Titulo'

// Aula 29:
// import Botao from './components/Botao'

// Aula 30:
// import Contador from './components/Contador'

// Aula 32:
// import Pai from './components/direta/Pai'

// Aula 33:
// import Pai from './components/indireta/Pai'

// Aula 34:
// import ContadorV2 from './components/contador/ContadorV2'

// Aula 35:
// import Diferenciar from './components/Diferenciar'

// Aula 37:
// import ParImpar from './components/ParImpar'

// Aula 38:
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'

// Aula 39:
// import UsusarioLogado from './components/UsusarioLogado'

// Aula 40:
// import ListaProdutos from './components/produtos/ListaProdutos'

// Aula 41:
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

// Aula 42:
import DigiteSeuNome from './components/DigiteSeuNome'

// Conteudo oculto, clique para expandir!!!
// Componentes baseados em função:

// // Primeira forma, como function declaration:
// /*
// function App() {
//     return <Text>Primeiro Componente</Text>
// }
// */

// // Segunda forma, como função anônima:
// /*
// const App = function () {
//     return <Text>Primeiro Componente!</Text>
// }
// */

// // Terceira forma, forma direta:
// /*
// export default function () {
//     return <Text>Primeiro Componente!</Text>
// }
// */

// // Quarta forma, usando arrow function:
// /*
// export default () => {
//     return <Text>Primeiro Componente!!!</Text>
// }
// */

// // Quinta forma, usando arrow function e tirando o corpo da função:
// export default () => <Text>Primeiro Componente!!!</Text>

// export default App

/*
    No componente JSX pode-se abrir e fechar a tag quando se 
    tem corpo ou fechar a tag diretamente na parte de abertura
    quando não se tem o corpo:

    export default () => <View><Primeiro></Primeiro></View>
    export default () => <View><Primeiro /></View>
*/ 

// Pode-se retorna dentro de parenteses:
// export default () => (<View><Primeiro /></View>)

export default () => (
    // Usar o SafeAreaView para ter o mesmo comportamento no android e ios.
    <SafeAreaView style={style.App}>
        {/* O que é colocado entre chaves {} em JSX é interpretado como JS. EX: */}
        {/* <Text>{ 1 + 1 }</Text>
        <Primeiro />

        <CompPadrao />
        <Comp1 />
        <Comp2 /> */}

        {/* Passando propriedas para o componente: */}
        {/* <MinMax min="3" max="20" />
        <MinMax min="1" max="94" /> */}
        {/* Para passar valores numericos: */}
        {/* <MinMax min={1} max={94} /> */}

        {/* <Aleatorio valorMin={1} valorMax= {100} />
        <Aleatorio valorMin={1} valorMax= {100} /> */}

        {/* <Titulo principal="Cadastro Produto" 
                secundario="Tela de Cadastro do Produto" /> */}

        {/* <Botao/> */}

        {/* <Contador inicial={100} passo={13} />
        <Contador /> */}

        {/* <Pai /> */}

        {/* <Pai /> */}

        {/* <ContadorV2 /> */}

        {/* <Diferenciar /> */}

        {/* <ParImpar num={3} /> */}

        {/* Passando componentes dentro de outro:
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia> */}

        {/* Passando um objeto para um componenete:
        Como tudo em JSX que esta entre {} é considerado JS, basta criar um objeto literal dentro.
        <UsusarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} } />
        <UsusarioLogado usuario={ {nome: 'Ana'} } />
        <UsusarioLogado usuario={ {email: 'carlos@empresa.com'} } />
        <UsusarioLogado usuario={null} />
        <UsusarioLogado usuario={ {} } /> */}

        {/* <ListaProdutos /> */}
        
        {/* <ListaProdutosV2 /> */}

        <DigiteSeuNome />

    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})




