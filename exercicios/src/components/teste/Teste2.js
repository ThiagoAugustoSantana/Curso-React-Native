import React, { useState, useEffect } from 'react';
import { Alert, View, ScrollView, Text, Image } from 'react-native';

export default function App() {
  const [pokemonEscolhido, setPokemonEscolhido] = useState(null);

  const getPokemonName = async (idPokemon) => {
    try {
      const response = await fetch(`http://localhost:3000/`);
      const data = await response.json();
      const pokemonNome = data.name;
      setPokemonEscolhido(pokemonNome);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
    }
  }

  useEffect(() => {
    // Fetch the name of the Pokémon with ID 1 initially
    getPokemonName(3);
  }, []);

  return (
    <View>
        {pokemonEscolhido != null && (
          <View>
            <Text>Nome do Pokémon: {pokemonEscolhido}</Text>
          </View>
        )}
    </View>
  );
}