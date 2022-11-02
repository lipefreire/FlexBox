import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Header() {
    return (
      <View style={styles.cabecalho}>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue', borderRadius: 15}}></View>
        <View style={{width: 150, height: 10, backgroundColor: 'steelblue', borderRadius: 40}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue', borderRadius: 15}}></View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cabecalho: {
      flexDirection: 'row',
      flexBasis: 100,
      width: '100%',
      backgroundColor: 'powderblue',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
      paddingHorizontal: 20
    }
});

