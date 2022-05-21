import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Card from '../Card';
import Filter from '../Filter';
import { Container, Result, Title, Wrapper } from './style';
const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const [data, setData] = useState([]);

  useQuery(
    'get data',
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.dataList[0]);
      },
    },
  );
  console.log(data, 'res');
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Title>
          <div className='title center'>Properties</div>
          <div className='description center'>
            Siz orzu qildan va siz izlagan arzon,qulay uylar
          </div>
        </Title>
        <div className='description'>{data.length} Total</div>
        <Result>
          {data.map((value) => {
            return <Card key={value.id} info={value} />;
          })}
        </Result>
      </Wrapper>
    </Container>
  );
};

export default Properties;
