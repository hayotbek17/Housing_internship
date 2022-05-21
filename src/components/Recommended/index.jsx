import React, { useRef } from 'react';
import Card from '../Card';
import { Carousel, Container, Icon, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel';
export const Recommended = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />, 
  ];
  const slide = useRef();
  return (
    <Container>
      <div className='title center'>Recommended</div>
      <div className='description center'>
        Siz orzu qildan va siz izlagan arzon,qulay uylar
      </div>
      <Wrapper>
        <Carousel>
          <Icon.Left onClick={() => slide.current?.slidePrev()} />
          <Icon.Right onClick={() => slide.current?.slideNext()} />
          <AliceCarousel ref={slide} autoWidth items={items} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Recommended;