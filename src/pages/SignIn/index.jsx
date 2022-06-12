import React, { useState } from 'react';
import { Container, Wrapper } from './styled';
import { Button, Input } from '../../components/Generic';
// import { useQuery } from 'react-query';
import { Checkbox } from 'antd';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useMutation((props) => {
    return fetch(`${url}/public/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    mutate(
      'hey',
      {
        onSuccess: (res) => {
          localStorage.setItem('token', res?.authenticationToken);

          if (res?.authenticationToken) navigate('/home');
        },
      },
      {
        onError: (res) => {},
      },
    );
  };
  return (
    <Container>
      <Wrapper>
        <div className='subtitle'>Sign In</div>
        <Input
          placeholder={'Email'}
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
        />
        <Input
          placeholder={'Password'}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <Button onClick={onSubmit} type={'secondary'}>
          Login
        </Button>

        <Checkbox>
          <div className='description'>Remember me</div>
        </Checkbox>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
