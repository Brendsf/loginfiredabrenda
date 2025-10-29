import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { api } from "../firebaseConfig";

export default function TelaEditar({ navigation, route }) {
  const { contato, atualizarLista } = route.params;
  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);

  const editarContato = async () => {
    try {
      await api.put(`/contatos/${contato.id}.json`, { nome, telefone });
      Alert.alert("Sucesso", "Contato atualizado");
      atualizarLista();
      navigation.goBack();
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível atualizar o contato");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={styles.input} />
      <Button title="Salvar Alterações" onPress={editarContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }
});
