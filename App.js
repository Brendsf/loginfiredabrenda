import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaLogin from "./screens/login";
import TelaCadastro from "./screens/cadastro";
import TelaMenu from "./screens/menu";
import TelaLista from "./screens/listaContato";
import TelaAdicionar from "./screens/adicionarContato";
import TelaEditar from "./screens/editarContato";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={TelaCadastro}
          options={{ title: "Cadastrar Usuário" }}
        />
        <Stack.Screen
          name="Menu"
          component={TelaMenu}
          options={{ title: "Bem-vinda(o)" }}
        />
        <Stack.Screen
          name="Contatos"
          component={TelaLista}
          options={{ title: "Lista de Contatos" }}
        />
        <Stack.Screen
          name="Adicionar"
          component={TelaAdicionar}
          options={{ title: "Novo Contato" }}
        />
        <Stack.Screen
          name="Editar"
          component={TelaEditar}
          options={{ title: "Editar Contato" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
