import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const SelectedHouse = () => {
  const { id } = useParams();
  const [state, setState] = useState({});
  useQuery(
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
        console.log(state, 'res');
      },
    },
  );

  return <h1>{state.address}</h1>;
};

export default SelectedHouse;
