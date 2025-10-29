import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { api } from "../firebaseConfig";

export default function TelaLista({ navigation }) {
  const [contatos, setContatos] = useState([]);


  const carregarContatos = async () => {
    try {
      const response = await api.get("/contatos.json");
      const data = response.data;
      if (data) {
        const lista = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setContatos(lista);
      } else {
        setContatos([]);
      }
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível carregar os contatos");
    }
  };

  useEffect(() => {
    carregarContatos();
  }, []);

 
  const deletarContato = async (id) => {
    try {
      await api.delete(`/contatos/${id}.json`);
      carregarContatos();
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível deletar o contato");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar Contato" onPress={() => navigation.navigate("Adicionar", { atualizarLista: carregarContatos })} />
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contato}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
            <View style={styles.botoes}>
              <Button title="Editar" onPress={() => navigation.navigate("Editar", { contato: item, atualizarLista: carregarContatos })} />
              <Button title="Excluir" onPress={() => deletarContato(item.id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  contato: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc", marginBottom: 5 },
  nome: { fontSize: 18, fontWeight: "bold" },
  botoes: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 }
});
