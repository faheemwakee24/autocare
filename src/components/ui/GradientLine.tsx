// GradientLine.js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientLine = ({
  height = 2,
  colors = ['#5C737400', '#5C737480', '#5C737400'],
  style = {},
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        {
          height,
          width: '100%',
          borderRadius: height / 2,
        },
        style,
      ]}
    />
  );
};

export default GradientLine;
