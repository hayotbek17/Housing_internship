import React, { useRef, useState } from 'react';
import { Container, Wrapper } from './styled';
import { Button, Input } from '../../components/Generic';
import { useQuery } from 'react-query';
import { Checkbox } from 'antd';
const SignIn = () => {
  // const EmailRef = useRef();
  // const PasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <Container>
      <Wrapper>
        <div className='subtitle'>Sign In</div>
        <Input
          onChange={({ target }) => setEmail(target?.value)}
          placeholder={'Email'}
          value={email}
        />
        <Input
          onChange={({ target }) => setPassword(target?.value)}
          placeholder={'Password'}
          value={password}
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
