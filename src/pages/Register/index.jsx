import React from 'react';
import { Button, Input } from '../../components/Generic';
import { Container, Wrapper, Login } from './style';
import { useNavigate } from 'react-router';
const Register = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <div className='subtitle'>Registration</div>

        <Input placeholder={'Login'} mt={10} />
        <Input placeholder={'First name'} />
        <Input placeholder={'Last name'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'User role'} />
        <Input placeholder={'Password'} />
        <Button type={'secondary'}>Register</Button>
        <Login className={'description'} onClick={() => navigate('/signin')}>
          Sign in
        </Login>
      </Wrapper>
    </Container>
  );
};

export default Register;
