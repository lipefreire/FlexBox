import { StyleSheet, View } from 'react-native';
import React from 'react'

import TextIcon from '../icons/texticon'

export default function Categories() {
    return (
      <View style={styles.categories}>
        <TextIcon></TextIcon>
        <TextIcon></TextIcon>
        <TextIcon></TextIcon>
        <TextIcon></TextIcon>
        <TextIcon></TextIcon>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'powderblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categories: {
      flexDirection: 'row',
      flexBasis: 90,
      width: '100%',
      backgroundColor: 'powderblue',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

