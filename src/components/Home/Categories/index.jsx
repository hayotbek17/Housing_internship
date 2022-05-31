import React, { useRef } from 'react';
import Card from '../../Card';
import { Carousel, Container, Icon, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel';
export const Categories = () => {
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
      <div className='title center'>Category</div>
      <div className='description center'>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
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
export default Categories;
