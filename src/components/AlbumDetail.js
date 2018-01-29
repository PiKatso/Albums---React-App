import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>

        <View>
          <Image source={{ uri: props.album.thumbnail_image}} />
        </View>

        <View style={styles.headerTextContainer}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetail;
