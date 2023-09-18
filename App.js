import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Pressable, Text, View,Switch, TextInput, Image, ImageBackground } from 'react-native'; 

import imagem1 from './assets/fundohomem.png'
import imagem2 from './assets/fundomulher.png'

export default function App() {

  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(false);
  const [peso,setPeso] = useState('');
  const [imagem, setImagem] = useState('');

  const calcular = (altura,sexo,peso,imagem) => {
    if(sexo == false){
      let h = parseInt(altura)
      setPeso(( h - 100 ) - [ ( h - 150 ) / 4 ])
    } else if(sexo == true){
      let h = parseInt(altura)
      setPeso(( h - 100 ) - [ ( h - 150 ) / 2 ])
    };

  };
  return (
    <View style={styles.container}>
      <ImageBackground source={!sexo ? imagem1 : imagem2} resizeMode="cover" style={{width: '100%', height: "100%"}}>
      <View style={styles.content}>
        <View style={styles.vidro}>
        <Text style={styles.titulo}>PESO IDEAL</Text>
        <Text style={styles.titulosegundo}>ALTURA</Text>
        <View>
          <TextInput
          value={altura}
          onChangeText={setAltura}
          style={styles.caixa}
          placeholder='Insira a altura'
          keyboardType='numeric'
          />
        </View>
        <Text style={styles.titulosegundo}>Sexo</Text>
        <View style={{display: "flex", flexDirection: "row",  alignItems: "center", justifyContent: "center"}}>
          <Text style={styles.homem}>HOMEM</Text>
          <Switch
                onValueChange={setSexo}
                value={sexo}
          />
          <Text style={styles.mulher}>MULHER</Text>
        </View>
        <Pressable
          onPress={() => calcular(altura,sexo,peso,imagem)}
        >
          <Text style={styles.botao}>
            CALCULAR
          </Text>
        </Pressable>

        <View style={styles.espaco}><Text style={styles.resul}>{`${peso}`}</Text></View>
        <StatusBar style="auto" />
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop:100,
    alignSelf:'center',
    marginTop:20
  },
  espaco:{
    paddingTop:10,
  },
  caixa:{
    borderWidth:1,
    paddingStart:15,
    borderRadius:20,
    borderColor:'purple',
  },
  resul:{
    borderWidth:2,
    borderRadius:10,
    paddingTop:2,
    width:70,
    width:50,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    textAlign:"center",
    fontWeight: "bold",
    backgroundColor:"#FDE0FF",
    color:"purple",
    borderColor:"purple",
  },
  titulo: {
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    fontStyle:"italic",
    color:"purple",
  },
  titulosegundo:{
    fontWeight: "bold",
    paddingStart:15,
    paddingTop:10,
    fontSize:20,
    color:"purple",
  },
  homem:{
    color:'blue',
    fontWeight: "bold",
  },
  mulher:{
    color:'#FF0A99',
    fontWeight: "bold",
  },
  botao:{
    fontWeight:"bold",
    borderWidth:1,
    borderColor:"purple",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    textAlign:"center",
    padding:15,
    backgroundColor:"#FDE0FF",
    color:"purple",
  },
  texto: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#fff',
    opacity: 1
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: '#044e8f',
    alignItems: 'center',
    width: 120,
  },
  image: {
    flex: 1,
  },
  vidro:{
    backgroundColor:"rgba(0, 0, 0, 0.200)",
    width:340,
    height:300,
    borderRadius:30,
  }
});