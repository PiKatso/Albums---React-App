// Import Libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    position: 'realative',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#fcfcfc',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

// Make Component available to other parts of the app
 export default Header;
