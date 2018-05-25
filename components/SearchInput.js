import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const searchInput = props => (
  <View style={styles.searchInput}>
    <TextInput
      style={styles.textInput}
      onChangeText={props.textChanged}
      value={props.text}
      placeholder={props.placeholder}
      placeholderTextColor="#777"
    />
    <Button 
      onPress={props.searchPressed}
      title="Search"
      color="#42adf4"
      style={styles.button}
    />
  </View>
);

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
  },
  button: {
    width: '30%'
  }
});

export default searchInput;
