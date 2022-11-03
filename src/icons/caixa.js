import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Caixa() {
    return (
        <View>
            <View style={styles.quadrado}></View>
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
    quadrado: {
        width: 170, 
        height: 80, 
        backgroundColor: '#4bc4cc', 
    },
    titulo: {
        width: 120, 
        height: 60, 
        backgroundColor: 'blue', 
    },
});