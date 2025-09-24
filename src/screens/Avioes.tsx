import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './AvioesStyle';

export function Avioes({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aviões</Text>
      <Text style={styles.descricao}>
        Avião é uma aeronave de asa fixa que voa graças ao seu formato aerodinâmico e motores potentes.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#ef6c00' : '#fb8c00', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
