import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Pagina() {
    return (
        <View style={styles.container}>
            <View style={styles.ponto2}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.ponto}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.ponto2}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.ponto2}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.ponto2}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ponto: {
        width: 10, 
        height: 10,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    ponto2: {
        width: 10, 
        height: 10,
        flexDirection: 'row',
        backgroundColor: 'midnightblue', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40, 
    },
    invisivel: {
        width: 4, 
        height: 4,
        flexDirection: 'row',
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
});
