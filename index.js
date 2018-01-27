// Import a library to creat a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
  return (
    <Text>some text</Text>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
