import React from 'react';
import MyCard from '../MyCard';
import { useMutation, useQuery } from 'react-query';
import {
  ConIn,
  Container,
  Details,
  Head,
  Listing,
  Title,
  Wrapper,
} from './style';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { Button } from '../Generic';
const { REACT_APP_BASE_URL: url } = process.env;
const Profile = () => {
  const onDelete = (id) => {
    mutate(id, {
      onSuccess: (res) => (
        res.status === 200 && refetch(), message.success('Deleted')
      ),
    });
  };
  const navigate = useNavigate();
  const { mutate } = useMutation((id) => {
    return fetch(`${url}/v1/houses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      },
    });
  });

  const { data, isLoading, refetch } = useQuery('data', () => {
    return fetch(`${url}/v1/houses/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      },
    }).then((res) => res.json());
  });
  console.log(data?.data);
  if (localStorage.getItem('token')) {
    return (
      <Wrapper>
        <Head>
          <div className='title'>My Properties</div>
          <Button
            onClick={() => navigate('/profile/add')}
            type={'secondary'}
            width={'100px'}
          >
            Add +
          </Button>
        </Head>
        <Container>
          <ConIn>
            <Listing>Listing Title</Listing>
            <Details>
              <Title className=''>Date Published</Title>
              <Title className=''>Status</Title>
              <Title className=''>View</Title>
              <Title className=''>Action</Title>
            </Details>
          </ConIn>
          {isLoading && <h1>loading...</h1>}

          {data?.data?.map((info) => {
            return (
              <MyCard
                key={info.id}
                info={info}
                onClick={() => onDelete(info.id)}
              />
            );
          })}
        </Container>
      </Wrapper>
    );
  } else {
    navigate('/home');
  }
};

export default Profile;
