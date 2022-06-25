import React, { useRef } from 'react';
import { Container, Icon, Img, Opacity, Titles, Wrapper } from './style';
import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.png';
import { Button } from '../../Generic';
import Filter from '../../Filter';
export const Carousel = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <Opacity></Opacity>
      <Titles>
        Skyper Pool Partment Titles Titles
        <Titles.In>112 Glenwood Ave Hyde Park, Boston, MA</Titles.In>
        $5,250/mo
        <Button mt={30} width={'180px'}>
          {' '}
          Read More
        </Button>
        <div className='mobile'>
          <Filter />
        </div>
      </Titles>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />
      <Container ref={slider} dots autoplay>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img2} />
        <Img src={img2} />
      </Container>
    </Wrapper>
  );
};
export default Carousel;
