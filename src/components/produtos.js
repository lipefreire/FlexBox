import { StyleSheet, Text, View } from "react-native";
import Traco from '../icons/traco'

export default function Produtos() {
  return (
    <View style={styles.categoria}>
      <View style={styles.categoria}>
        <Traco></Traco>
        <Traco></Traco>
        <Traco></Traco>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoria: {
    flexDirection: "row",
    flexBasis: 200,
    alignItems: "center",
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    backgroundColor: "skyblue",
    paddingHorizontal: 10,
  },
});