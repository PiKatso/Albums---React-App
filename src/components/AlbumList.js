// Import the Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Make the component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }

  render() {
    return (
      <View>
         <Text>Album List</Text>
      </View>
    );
  }
}

// Export the component
export default AlbumList;
