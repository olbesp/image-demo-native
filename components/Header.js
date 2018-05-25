import React from 'react';
import { StyleSheet, Text } from 'react-native';

const header = () => (
  <Text style={styles.header}>Image Searcher</Text>
);

const styles = StyleSheet.create({
  header: {
    color: '#42adf4',
    fontSize: 30,
  },
});

export default header;
