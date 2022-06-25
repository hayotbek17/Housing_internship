import React, { useRef, useState } from 'react';

import { Carousel, Container, Icon, Wrapper, Card } from './style';
import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const CategoryCard = ({ title, id }) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/properties?category_id=${id}`);
  };
  return (
    <Card onClick={goto}>
      <Icon.Apartment />
      <Card.Title>{title}</Card.Title>
    </Card>
  );
};

const Categories = () => {
  const [list, setList] = useState([]);

  const slide = useRef();

  useQuery(
    '',
    () => {
      return fetch(`${url}/v1/categories/list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        let response = res?.data?.map((value) => (
          <CategoryCard title={value.name} id={value.id} />
        ));

        setList(response || []);
      },
    },
  );

  return (
    <Container>
      <div className='title center'>Category</div>
      <div className='description center'>
        Nulla quis curabitur velit volutpat auctor
      </div>
      <Wrapper>
        <Carousel>
          <Icon.Left onClick={() => slide.current?.slidePrev()} />
          <Icon.Right onClick={() => slide.current?.slideNext()} />
          <AliceCarousel ref={slide} autoWidth items={list} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Categories;
