import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartaoProduto = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );
};

export const MakeupApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const produtos = [
    
    { id: 1, nome: 'Produto 1', preco: 10.99, imagem: 'https://m.media-amazon.com/images/I/61xa-xk59aL._AC_SY355_.jpg'},
    { id: 2, nome: 'Produto 2', preco: 19.99, imagem: 'https://m.media-amazon.com/images/I/61xa-xk59aL._AC_SY355_.jpg' },
    { id: 3, nome: 'Produto 3', preco: 15.50, imagem: 'https://m.media-amazon.com/images/I/41Qh0vh6-0L.jpg' },
    // Adicione mais produtos conforme necessário
  ];

  const produtosFiltrados = produtos.filter(item => item.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar produtos de maquiagem"
        value={searchTerm}
        onChangeText={texto => setSearchTerm(texto)}
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartaoProduto item={item} />}
        numColumns={2}
/>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
    textAlign: 'center',
  },
});

