import React from 'react';
import MyCard from '../MyCard';
import { useQuery } from 'react-query';
import { ConIn, Container, Details, Listing, Title, Wrapper } from './style';

const { REACT_APP_BASE_URL: url } = process.env;

const Profile = () => {
  const { data } = useQuery('data', () => {
    return fetch(`${url}/v1/houses/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      },
    }).then((res) => res.json());
  });
  console.log(data?.data);
  return (
    <Wrapper>
      <div className='title'>My Properties</div>

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
        {data?.data.map((info) => {
          return <MyCard key={info.id} info={info} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Profile;
