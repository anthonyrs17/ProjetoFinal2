// DetalhesProduto.js
import React from 'react';
import { View, Text } from 'react-native';

export const DetalhesProduto = ({ route }) => {
  const { nome, preco } = route.params.item;

  return (
    <View>
      <Text>Detalhes do Produto</Text>
      <Text>Nome: {nome}</Text>
      <Text>Preço: R$ {preco.toFixed(2)}</Text>
      {/* Adicione mais detalhes conforme necessário */}
    </View>
  );
};


