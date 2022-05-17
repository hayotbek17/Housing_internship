import React from 'react';
import Filter from '../Filter';
import Carousel from './Carousel';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
    </Container>
  );
};
export default Home;
