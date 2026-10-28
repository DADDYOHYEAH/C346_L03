import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie';

const AllMovies = () => {
  return (
    <ScrollView>
      <Movie
        title="Doctor Sleep"
        year="2019"
        icon_name="skull"
        poster={require('./img/doctor-sleep.jpg')}
      />
      <Movie
        title="Midway"
        year="2020"
        icon_name="person-rifle"
        poster={require('./img/midway.jpg')}
      />
      <Movie
        title="Dorothy"
        year="2026"
        icon_name="skull"
        poster={{
          uri: 'https://media.themoviedb.org/t/p/w600_and_h900_face/o3r5DmWhOKdFmeIUoRJj4CvCqOP.jpg',
        }}
      />
    </ScrollView>
  );
};

export default AllMovies;