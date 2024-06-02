import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import LogoHome from './src/imagens/logo1.svg'

export default function App() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  function entrar() {
    if (usuario == 'admin' && senha == 'admin123') {
      console.log('Entrou')
    } else {
      Alert.alert("Aviso", "Usuario ou senha incorreta!")
    }
  }
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.header}>
        <LogoHome/>
      </View>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        keyboardType="default"
        autoCapitalize="none"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={entrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: '#DB4A2B'}}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  header: {
    marginTop: '-30%',
    height: 260
  },
  input: {
    marginBottom: 20,
    width: '70%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DB4A2B',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  button: {
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: '#DB4A2B',
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});
