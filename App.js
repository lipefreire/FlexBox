import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header'
import Banner from './src/components/banner'
import Categories from './src/components/categories'
import Promotion from './src/components/promotion'

export default function App() {
  return (
    <View>
      <Header></Header>
      <Banner></Banner>
      <Categories></Categories>
      <Promotion></Promotion>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
