import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { headerImageContainer, headerTextContainer } = styles;

  return (
    <Card>
      <CardSection>

        <View>
          <Image
            style={headerImageContainer}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerTextContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>
    </Card>
  );
};

const styles = {
  headerImageContainer: {
    height: 50,
    width: 50
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetail;
