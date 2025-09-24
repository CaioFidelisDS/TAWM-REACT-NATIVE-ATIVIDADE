import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './CuriosidadesStyle';

export function Curiosidades({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Curiosidades</Text>
      <Text style={styles.descricao}>
        O maior avião de passageiros é o Airbus A380. O primeiro voo controlado foi em 1903 pelos irmãos Wright.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? '#512da8' : '#673ab7', transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }] }
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
