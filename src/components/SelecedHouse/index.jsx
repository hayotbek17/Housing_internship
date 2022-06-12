import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import HomeInfo from './HomeInfo';
import ImgPath from './imgPath';
import { Container } from './style';

const { REACT_APP_BASE_URL: url } = process.env;

const SelectedHouse = () => {
  const { id } = useParams();
  const [state, setState] = useState({});
  const { isLoading, isRefetching } = useQuery(
    'get data',
    () => {
      return fetch(
        `${url}/v1/houses/${id}`,

        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      ).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setState(res?.data);
      },
      keepPreviousData: true,
      // datani kesh qvoladi
      refetchOnWindowFocus: false,
      // ekranga focus qilganda malumotni qaytadan fetch qilmaydi
    },
  );

  return (
    <Container>
      <ImgPath />
      <HomeInfo data={state} />

      <div>
        <h2>{(isLoading || isRefetching) && 'loading...'}</h2>
      </div>
    </Container>
  );
};

export default SelectedHouse;
