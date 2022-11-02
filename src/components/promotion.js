import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Promotion() {
    return (
      <View style={styles.promotion}>
        <View style={{width: 190, height: 10, backgroundColor: 'powderblue', borderRadius: 40}}></View>
        <View style={{width: 190, height: 10, backgroundColor: 'powderblue', borderRadius: 40}}></View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 200,
    },
    promotion: {
        flex: 1,
        flexDirection: 'column',
        flexBasis: 100,
        backgroundColor: 'steelblue',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingHorizontal: 20
    },
    texto: {
        width: 150, height: 10, backgroundColor: 'powderblue', borderRadius: 40
    }
});

