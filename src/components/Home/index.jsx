import React from 'react';
import Choose from './Choose';
import Filter from '../Filter';
import Recommended from './Recommended';
import Carousel from './Carousel';
import { Container } from './style';
import Categories from './Categories';

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Choose />
      <Categories />
    </Container>
  );
};
export default Home;
