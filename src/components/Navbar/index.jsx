import React from 'react';
import { navbar } from '../../utils/navbar';
import {
  Wrapper,
  Container,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
} from './styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import Footer from '../Footer';
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
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </NavbarBody>
          <Button onClick={() => navigate('/signin')} width={'120px'}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Navbar;
