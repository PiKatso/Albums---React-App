// Import a library to creat a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/component/AlbumList;'

// Create a component
const App = () => (
  <Header headerText={'Albums!'} /> //self closing tag
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
