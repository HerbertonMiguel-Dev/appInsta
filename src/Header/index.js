import React from 'react'; // Importa a biblioteca React
import {View, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Importa componentes de layout e estilização do React Native

// Componente de cabeçalho
export default function Header() {
  // Retorna o layout do cabeçalho
  return (
    <View style={styles.header}>
      {/* Botão com a logo */}
      <TouchableOpacity>
        <Image
          source={require('../img/logo.png')} // Imagem da logo
          style={styles.logo} // Estilo da logo
        />
      </TouchableOpacity>

      {/* Botão de envio */}
      <TouchableOpacity>
        <Image
          source={require('../img/send.png')} // Imagem do ícone de envio
          style={styles.send} // Estilo do ícone de envio
        />
      </TouchableOpacity>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  header: {
    height: 55, // Altura do cabeçalho
    backgroundColor: '#fff', // Cor de fundo do cabeçalho
    flexDirection: 'row', // Alinha os itens na horizontal
    alignItems: 'center', // Alinha os itens ao centro verticalmente
    justifyContent: 'space-between', // Espaça os itens igualmente
    paddingLeft: 15, // Adiciona padding à esquerda
    paddingRight: 15, // Adiciona padding à direita
    borderBottomWidth: 0.2, // Adiciona uma borda inferior
    shadowColor: '#000', // Cor da sombra
    elevation: 2 // Elevação da sombra
  },
  send: {
    width: 23, // Largura do ícone de envio
    height: 23 // Altura do ícone de envio
  }
});
