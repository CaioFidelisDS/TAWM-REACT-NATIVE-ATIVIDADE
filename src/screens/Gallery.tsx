import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './GalleryStyle';

export function Gallery({navigation}:any) {

  function navToHome(){
    navigation.navigate('home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GALLERY</Text>
      <Pressable style={styles.botao} onPress={navToHome}>
            <Text style={styles.textoBotao}>Ir para Home</Text>
        </Pressable>
    </View>
  );
}