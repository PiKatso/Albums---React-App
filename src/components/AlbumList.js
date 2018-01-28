// Import the Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Make the component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return
    this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums( )}
      </View>
    );
  }
}

// Export the component
export default AlbumList;
