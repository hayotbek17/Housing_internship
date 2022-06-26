import React, { useRef } from 'react';
import Card from '../../Card';
import { Button } from '../../Generic';
import { Carousel, Container, Icon, Mobile, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel';
export const Rend = () => {
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
      <div className='title center'>Recent Properties for Rent</div>
      <div className='description center'>
        Siz orzu qildan va siz izlagan arzon,qulay uylar
      </div>
      <Wrapper>
        <Carousel>
          <Icon.Left onClick={() => slide.current?.slidePrev()} />
          <Icon.Right onClick={() => slide.current?.slideNext()} />
          <AliceCarousel ref={slide} autoWidth={true} items={items} />
        </Carousel>
      </Wrapper>
      <Mobile>
        <Card />,
        <Card />,
        <Card />,
        <Card />,<Button type={'secondary'}>Show more</Button>
      </Mobile>
    </Container>
  );
};
export default Rend;
