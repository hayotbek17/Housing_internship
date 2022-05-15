import React from 'react';
import { navbar } from '../../utils/navbar';
import {
  Body,
  Wrapper,
  Container,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
} from './styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Housing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link key={id} to={path}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>
          <Button onClick={() => navigate('/login')} width={'120px'}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
