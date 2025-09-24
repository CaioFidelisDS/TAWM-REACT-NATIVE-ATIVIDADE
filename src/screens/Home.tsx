import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './HomeStyle';

export function Home({ navigation }: any) {
  function navToAvioes() {
    navigation.navigate('Avioes');
  }
  function navToTipos() {
    navigation.navigate('TiposAvioes');
  }
  function navToCuriosidades() {
    navigation.navigate('Curiosidades');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App de Aviões</Text>
      <Text style={styles.descricao}>
        Descubra tudo sobre aviões, tipos e curiosidades!
      </Text>
      <Pressable style={styles.botao} onPress={navToAvioes}>
        <Text style={styles.textoBotao}>Sobre Aviões</Text>
      </Pressable>
      <Pressable style={styles.botao} onPress={navToTipos}>
        <Text style={styles.textoBotao}>Tipos de Aviões</Text>
      </Pressable>
      <Pressable style={styles.botao} onPress={navToCuriosidades}>
        <Text style={styles.textoBotao}>Curiosidades</Text>
      </Pressable>
    </View>
  );
}
