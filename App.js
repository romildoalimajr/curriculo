import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/eu01.jpeg';

const App = () => {
  return (
    <>
      <View style = {style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style ={style.foto}/>
          <Text style ={style.nome}>Romildo A. Lima Jr.</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <Icon name="github" size={30} />
            <Icon name="facebook" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Experiências Profissionais</Text>
          </View>
          <View style={style.card_content}>

          </View>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  page:{
    backgroundColor: '#e7e7e7',
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho:{
    flex: 1,
    alignItens: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome:{
    fontSize: 26,
    fontWeight: 'bold', 
    marginTop: 10,
  },
  funcao:{
    color: '#939393',
    marginBotton: 10,
  },
  redes_sociais:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width: '60%',
    backgroundColor: '#ff0000',
    marginTop: 20,
  },
  card:{
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    justifyContent: 'center',
    alignItems:'center',
  },
});

export default App;