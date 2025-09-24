import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './HomeStyle';

export function Home({navigation}:any) {

  function navToGallery(){
    navigation.navigate('gallery');
  }
  function navToTela2(){
    navigation.navigate('Tela2');
  }
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
        <Pressable style={styles.botao} onPress={navToGallery}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={navToTela2}>
            <Text style={styles.textoBotao}>Ir para Tela 2</Text>
        </Pressable>
    </View>
  );
}