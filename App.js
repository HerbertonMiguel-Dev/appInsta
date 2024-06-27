// Importa bibliotecas e componentes necessários do React, React Native e React Native Switch
import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import { View, StyleSheet, FlatList } from "react-native"; // Importa componentes de layout e estilização do React Native

import Header from "./src/Header"; // Importa o componente de cabeçalho
import List from "./src/List"; // Importa o componente de lista

// Componente principal da aplicação
export default function App() {
  // Define o estado inicial com uma lista de publicações
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png', 
      likeada: true,
      likers: 1,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    }
  ]);

  // Retorna o layout da aplicação
  return (
    // Contêiner principal
    <View style={styles.container}> 
    {/* Renderiza o componente de cabeçalho */}
      <Header/> 

      <FlatList
        showsVerticalScrollIndicator={false} // Remove o indicador de rolagem vertical
        keyExtractor={(item) => item.id} // Define a chave única para cada item da lista
        data={feed} // Passa os dados do feed para a lista
        renderItem={({ item }) => <List data={item} />} // Renderiza cada item da lista usando o componente List
      />
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    marginTop: 35 // Adiciona margem no topo
  },
});
