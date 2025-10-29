import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { api } from "../firebaseConfig";

export default function TelaAdicionar({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const adicionarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    try {
      await api.post("/contatos.json", { nome, telefone });
      Alert.alert("Sucesso", "Contato adicionado");
      route.params.atualizarLista(); 
      navigation.goBack();
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível adicionar o contato");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={styles.input} />
      <Button title="Salvar" onPress={adicionarContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }
});
