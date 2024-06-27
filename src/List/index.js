import React from 'react'; // Importa a biblioteca React
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // Importa componentes de layout e estilização do React Native

// Componente que representa cada item da lista
export default function List(props) {

  // Função que carrega o ícone de like dependendo se a publicação foi curtida ou não
  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  // Função que retorna o texto de likes dependendo do número de curtidas
  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  // Retorna o layout de cada item da lista
  return (
    <View>
      {/* Exibe a foto de perfil e o nome do usuário */}
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: props.data.imgperfil }} // URL da imagem de perfil
          style={styles.fotoPerfil} // Estilo da imagem de perfil
        />
        {/* Nome do usuário */}
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text> 
      </View>

      {/* Exibe a imagem da publicação */}
      <Image 
        resizeMode="cover"
        source={{ uri: props.data.imgPublicacao }} // URL da imagem da publicação
        style={styles.fotoPublicacao} // Estilo da imagem da publicação
      />

      {/* Área dos botões de interação (like, comment, send) */}
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)} // Ícone de like
            style={styles.iconeLike} // Estilo do ícone de like
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
            source={require('../img/comment.png')} // Ícone de comentário
            style={styles.iconeLike} // Estilo do ícone de comentário
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
            source={require('../img/send.png')} // Ícone de envio
            style={styles.iconeLike} // Estilo do ícone de envio
          />
        </TouchableOpacity>
      </View>

      {/* Exibe o número de curtidas, se houver */}
      {mostraLikes(props.data.likers)}

      {/* Exibe o nome do usuário e a descrição da publicação */}
      <Text style={styles.nomeRodape}>{props.data.nome}</Text>
      <Text style={styles.desRodape}>{props.data.descricao}</Text>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row', // Alinha os itens na horizontal
    flex: 1,
    alignItems: 'center', // Alinha os itens ao centro verticalmente
    padding: 8, // Adiciona padding
  },
  fotoPerfil: {
    width: 50, // Largura da imagem de perfil
    height: 50, // Altura da imagem de perfil
    borderRadius: 25, // Arredonda as bordas da imagem de perfil
  },
  nomeUsuario: {
    paddingLeft: 5, // Adiciona padding à esquerda
    fontSize: 22, // Tamanho da fonte
    color: '#000' // Cor do texto
  },
  fotoPublicacao: {
    height: 400, // Altura da imagem da publicação
    alignItems: 'center' // Alinha a imagem ao centro
  },
  areaBtn: {
    flexDirection: 'row', // Alinha os botões na horizontal
    padding: 5, // Adiciona padding
  },
  iconeLike: {
    width: 25, // Largura do ícone de like
    height: 25, // Altura do ícone de like
  },
  btnsend: {
    paddingLeft: 5 // Adiciona padding à esquerda
  },
  likes: {
    fontWeight: 'bold', // Texto em negrito
    marginLeft: 5, // Adiciona margem à esquerda
    color: '#000' // Cor do texto
  },
  nomeRodape: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    paddingLeft: 5, // Adiciona padding à esquerda
    color: '#000' // Cor do texto
  },
  desRodape: {
    paddingLeft: 5, // Adiciona padding à esquerda
    paddingBottom: 10, // Adiciona padding na parte inferior
    fontSize: 15 // Tamanho da fonte
  }
});
