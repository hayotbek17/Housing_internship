import React from 'react';
import { Container, Title, Wrapper } from './styled';
import { Button } from '../../Generic';
const Popular = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
      <Title>
        Vermont Farmhouse With Antique Jail Is
        <br /> the Week's Most Popular Home
        <Button mt={48} width={'180px'} type={'secondary'}>
          Read more
        </Button>
      </Title>
    </Container>
  );
};

export default Popular;
