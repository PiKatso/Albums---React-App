// Import Libraries for making a Component
import React from 'react';
import { Text } from 'react-native';

// Make a Component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// Make Component available to other parts of the app
 export default Header;
