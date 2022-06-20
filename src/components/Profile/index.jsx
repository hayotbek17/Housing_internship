import React from 'react';
import MyCard from '../MyCard';
import {  useQuery } from 'react-query';
import {
  ConIn,
  Container,
  Details,
  Head,
  Listing,
  Loading,
  Title,
  Wrapper,
} from './style';
import { useNavigate } from 'react-router-dom';
// import { message } from 'antd';
import { Button } from '../Generic';
const { REACT_APP_BASE_URL: url } = process.env;
const Profile = () => {
  const navigate = useNavigate();

  

  const { data, isLoading, refetch } = useQuery('data', () => {
    return fetch(`${url}/v1/houses/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      },
    }).then((res) => res.json());
  });

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
          {isLoading && (
            <Loading>
              <Loading.In />
            </Loading>
          )}

          {data?.data?.map((info) => {
            return (
              <MyCard
                refetch={refetch}
                key={info.id}
                info={info}
               
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
