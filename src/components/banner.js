import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Banner() {
    return (
        <View style={styles.banner}>
            <View style={{width: '100%', height: '80%', backgroundColor: 'powderblue'}}></View>
            <View style={styles.ponto}></View>
            <View style={{width: 12, height: 12,flexDirection: 'row',backgroundColor: 'blue', justifyContent: 'center',alignItems: 'center',borderRadius: 40, }}></View>
            <View style={styles.ponto}></View>
            <View style={styles.ponto}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'column'
},
    banner: {
    flexDirection: 'column',
    flexBasis: 250,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'steelblue',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingHorizontal: 20
},
    ponto: {
    width: 12, 
    height: 12,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'skyblue', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40, 
}
});

