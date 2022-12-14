import { StyleSheet, View } from 'react-native';
import React from 'react'

import TwoText from '../icons/twoText'
import Caixa from '../icons/caixa'

export default function Promotion() {
    return (
      <View style={styles.promotion}>
        <TwoText></TwoText>
        <Caixa></Caixa>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 200,
    },
    promotion: {
        flexDirection: 'row',
        flexBasis: 140,
        backgroundColor: 'steelblue',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingHorizontal: 20
    },
    texto: {
        width: 150, height: 10, backgroundColor: 'powderblue', borderRadius: 40
    }
});

