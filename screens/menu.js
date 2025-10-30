import { signOut } from "firebase/auth";
import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from "../firebaseConfig";

export default function TelaMenu({ navigation }) {
  const sair = async () => {
    await signOut(auth);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vinda(o)!</Text>
      <Button title="Sair" onPress={sair} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, marginBottom: 20 },
});
