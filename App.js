import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('');
  const [feminino,setFemino] = useState('');
  const [masculino ,setMasculino] = useState('');
  const [resultado, setResultado] = useState('');

  const calculoMas = () => {
    let resulMasculino = ((altura - 100) - [ ( altura - 150 ) / 4 ]);
  };
  const calculoFem = () => {
    let resulFeminino = ((altura - 100) - [ ( altura - 150 ) / 2 ]);
  };
  const exibirTela = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>Peso Ideal</Text>
      <Text>Altura</Text>
      <TextInput style={styles.caixa}/>
      <Text>Sexo</Text>
      <Pressable onPress={() => calculoMas()}><Text>Masculino</Text></Pressable>
      <Pressable onPress={() => calculoFem()}><Text>Feminino</Text></Pressable>
      <Pressable><Text>Exibir</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa:{
    borderWidth:1,
  }
});
