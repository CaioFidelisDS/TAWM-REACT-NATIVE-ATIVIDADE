import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './AvioesStyle';

export function Avioes({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aviões</Text>
      <Text style={styles.descricao}>
        Avião é uma aeronave de asa fixa que voa graças ao seu formato aerodinâmico e motores potentes.
      </Text>
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
