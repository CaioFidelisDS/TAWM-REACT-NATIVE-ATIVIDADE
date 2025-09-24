import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './Tela2Style';

export function Tela2({navigation}:any) {

  function navToGallery(){
    navigation.navigate('gallery');
  }
  function navToHome(){
    navigation.navigate('home');
  }
  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>
        <Pressable style={styles.botao} onPress={navToGallery}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={navToHome}>
            <Text style={styles.textoBotao}>Ir para Home</Text>
        </Pressable>
    </View>
  );
}