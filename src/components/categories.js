import { StyleSheet, View } from 'react-native';
import React from 'react'

export default function Categories() {
    return (
      <View style={styles.categories}>
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
    categories: {
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

