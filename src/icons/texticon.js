import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function TextIcon() {
    return (
        <View style={styles.container}>
            <View style={styles.ponto}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.texto}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',

},
    ponto: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    texto: {
        width: 45,
        height: 10,
        backgroundColor: 'steelblue',
        borderRadius: 40
    },
    invisivel: {
        width: 45,
        height: 5,
        backgroundColor: 'powderblue',
        borderRadius: 40
    }
});

