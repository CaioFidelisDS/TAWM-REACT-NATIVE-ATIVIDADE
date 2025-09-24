import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './TiposAvioesStyle';

export function TiposAvioes({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tipos de Aviões</Text>
      <Text style={styles.descricao}>
        Existem aviões comerciais, cargueiros, militares, acrobáticos e muito mais.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#006064' : '#00acc1', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
