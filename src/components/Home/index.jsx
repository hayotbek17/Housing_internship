import React from 'react';
import Choose from './Choose';
import Filter from '../Filter';
import Recommended from './Recommended';
import Carousel from './Carousel';
import { Container } from './style';
import Categories from './Categories';
import Popular from './MostPopular';
import Rend from './Rend';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <Container>
      <div className='phone'>
        <Filter />
      </div>
      <Carousel />
      <Recommended />
      <Choose />
      <Categories />
      <Popular />
      <Rend />
      <Testimonials />
    </Container>
  );
};
export default Home;
