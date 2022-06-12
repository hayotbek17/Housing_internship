import React from 'react';
import Description from './Description';
import Request from './Request';
import { Container } from './style';

const HomeInfo = ({ data }) => {
  return (
    <Container>
      <Description data={data} />
      <Request data={data} />
    </Container>
  );
};

export default HomeInfo;
