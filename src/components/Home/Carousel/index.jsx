import React from 'react';
import { Container, Img } from './style';
import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.png';

export const Carousel = () => {
  return (
    <Container autoplay>
      <Img src={img1} />
      <Img src={img2} />
      <Img src={img2} />
      <Img src={img2} />
    </Container>
  );
};
export default Carousel;
