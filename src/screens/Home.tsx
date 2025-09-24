import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './HomeStyle';

export function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo sobre Aviões</Text>
      <Text style={styles.descricao}>
        Descubra tudo sobre aviões, tipos e curiosidades!
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#0277bd' : '#039be5', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.navigate('Avioes')}
      >
        <Text style={styles.textoBotao}>Sobre Aviões</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#0277bd' : '#039be5', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.navigate('TiposAvioes')}
      >
        <Text style={styles.textoBotao}>Tipos de Aviões</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#0277bd' : '#039be5', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.navigate('Curiosidades')}
      >
        <Text style={styles.textoBotao}>Curiosidades</Text>
      </Pressable>
    </View>
  );
}
