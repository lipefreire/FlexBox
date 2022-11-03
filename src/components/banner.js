import { StyleSheet, View } from 'react-native';
import React from 'react'

import Paginas from '../icons/paginas'

export default function Banner() {
    return (
        <View style={styles.banner}>
            <View style={{width: '90%', height: '85%', backgroundColor: '#4bc4cc'}}></View>
            <Paginas></Paginas>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'column'
},
    banner: {
        flexDirection: 'column',
        flexBasis: 260,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'steelblue',
        paddingTop: 25,
        paddingHorizontal: 20
    },
});

