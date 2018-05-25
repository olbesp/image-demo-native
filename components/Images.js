import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const images = props => {
  const imageElements = props.images.map(image => (
    <View key={image.id} style={styles.imageContainer}>
      <Image
        source={{ uri: image.urls.small }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      {imageElements}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 300,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default images;
