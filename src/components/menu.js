import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Botao from "../icons/botao"

export default function Menu() {
  return (
    <View style={styles.header}>
      <Botao></Botao>
      <Botao></Botao>
      <Botao></Botao>
      <Botao></Botao>
      <Botao></Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    flexBasis: 55,
    backgroundColor: "steelblue",
    width: "100%",
    height: "20%",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 45,
  }
});