import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './TiposAvioesStyle';

export function TiposAvioes({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tipos de Aviões</Text>
      <Text style={styles.descricao}>
        Existem aviões comerciais, cargueiros, militares, acrobáticos e muito mais.
      </Text>
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
