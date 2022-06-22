import React, { useState } from 'react';
import { Container, Wrapper, Register, Icon } from './styled';
import { Button, Input } from '../../components/Generic';
// import { useQuery } from 'react-query';
import { AiFillEye } from 'react-icons/ai';
import { Checkbox } from 'antd';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;
const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
  });
  const handleChange = () => {
    setVisible(!visible);
  };
  const onSubmit = () => {
    mutate(
      'hey',
      {
        onSuccess: (res) => {
          localStorage.setItem('token', res?.authenticationToken);

          if (res?.authenticationToken) navigate('/profile');
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
          type={'email'}
          placeholder={'Email'}
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
        />
        <Input
          type={visible ? 'password' : 'string'}
          placeholder={'Password'}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <Icon onClick={handleChange}>
          <AiFillEye />
        </Icon>
        <Button onClick={onSubmit} type={'secondary'}>
          Login
        </Button>

        <Checkbox>
          <div className='description'>Remember me</div>
        </Checkbox>
        <Register
          className={'description'}
          onClick={() => navigate('/register')}
        >
          Registration
        </Register>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
