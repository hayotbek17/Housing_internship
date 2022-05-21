import React from 'react';
import Filter from '../Filter';
import Recommended from '../Recommended';
import Carousel from './Carousel';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
    </Container>
  );
};
export default Home;
