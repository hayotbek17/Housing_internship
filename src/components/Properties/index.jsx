import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import Card from '../Card';
import Filter from '../Filter';
import { Container, Loading, Result, Title, Wrapper } from './style';
const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const { search } = useLocation();
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  const { isLoading } = useQuery(
    ['get data', search],
    () => {
      return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json());
    },

    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    },
  );

  return (
    <Container>
      <Filter />
      <Wrapper>
        {isLoading ? (
          <Loading>
            <Loading.In />
          </Loading>
        ) : (
          <Title>
            <div className='title center'>Properties</div>
            <div className='description center'>
              Siz orzu qildan va siz izlagan arzon,qulay uylar
            </div>
          </Title>
        )}

        <Wrapper.Title>
          <div className='description'>{data?.length} Total</div>
          <div className='description'>{data?.length} Total</div>
        </Wrapper.Title>
        <Result>
          {data?.map((value) => {
            return (
              <Card
                onClick={() => onSelect(value.id)}
                key={value.id}
                info={value}
              />
            );
          })}
        </Result>
      </Wrapper>
    </Container>
  );
};

export default Properties;
