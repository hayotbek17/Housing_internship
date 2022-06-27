import React, { useRef } from 'react';
import {
  Card,
  CardBottom,
  CardHead,
  Carousel,
  Container,
  Icon,
  Img,
  Tekst,
} from './style';
import AliceCarousel from 'react-alice-carousel';
const Testimonials = () => {
  const slide = useRef();

  const items = [
    [
      <Card>
        <CardHead>
          <div className='description'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>
        </CardHead>
        <CardBottom>
          <Img />
          <div className='subtitle'>Marvin McKinney</div>
          <div className='description'>Designer</div>
        </CardBottom>
      </Card>,
    ],
    [
      <Card>
        <CardHead>
          <div className='description'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>
        </CardHead>
        <CardBottom>
          <Img />
          <div className='subtitle'>Marvin McKinney</div>
          <div className='description'>Designer</div>
        </CardBottom>
      </Card>,
    ],
    [
      <Card>
        <CardHead>
          <div className='description'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>
        </CardHead>
        <CardBottom>
          <Img />
          <div className='subtitle'>Marvin McKinney</div>
          <div className='description'>Designer</div>
        </CardBottom>
      </Card>,
    ],
    <Card>
      <CardHead>
        <div className='description'>
          “ I believe in lifelong learning and Skola is a great place to learn
          from experts. I've learned a lot and recommend it to all my friends “
        </div>
      </CardHead>
      <CardBottom>
        <Img />
        <div className='subtitle'>Marvin McKinney</div>
        <div className='description'>Designer</div>
      </CardBottom>
    </Card>,
  ];

  return (
    <Container>
      <Tekst>
        <div className='title'>Testimonials</div>
        <div className='description'>Nulla quis curabitur velit.</div>
      </Tekst>

      <Carousel>
        <Icon.Left onClick={() => slide.current?.slidePrev()} />
        <Icon.Right onClick={() => slide.current?.slideNext()} />
        <AliceCarousel ref={slide} autoWidth={true} items={items} />
      </Carousel>
    </Container>
  );
};

export default Testimonials;
