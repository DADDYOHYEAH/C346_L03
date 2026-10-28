import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Movie = ({ title, year, icon_name, poster,icon_color }) => {
  return (
    <View>
      <Image source={poster} style={{ width: 400, height: 500 }} />
      <Text>
        {title} {year}
      </Text>
      <FontAwesome6 name={icon_name} size={40} color="#B23B23" />
    </View>
  );
};

export default Movie;