import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function twoText() {
    return (
        <View>
            <View style={styles.texto1}></View>
            <View style={styles.invisivel}></View>
            <View style={styles.texto2}></View>
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
    texto1: {
        width: 170, 
        height: 10, 
        backgroundColor: '#4bc4cc', 
        borderRadius: 40
    },
    texto2: {
        width: 120, 
        height: 10, 
        backgroundColor: '#4bc4cc', 
        borderRadius: 40
    },
    invisivel: {
        width: 10,
        height: 15,
        backgroundColor: 'steelblue',
        borderRadius: 40,
    }
});