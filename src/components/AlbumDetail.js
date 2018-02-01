import React from 'react';
import { Image, Text, View, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, image, url, thumbnail_image } = album;
  const {
    headerImageContainer,
    headerTextContainer,
    headerTextStyle,
    thumbnailContainerStyle,
    albumArtworkStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={headerImageContainer}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerTextContainer}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumArtworkStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy {title} Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyConent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  headerImageContainer: {
    height: 50,
    width: 50
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '700'
  },
  albumArtworkStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default AlbumDetail;
