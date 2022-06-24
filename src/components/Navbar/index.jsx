import React from 'react';
import { navbar } from '../../utils/navbar';
import {
  Wrapper,
  Container,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
  Nav,
  Log,
  Door,
} from './styled';
import { FaUser } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import Footer from '../Footer';
export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  var button;
  var icon;
  const logout = () => {
    navigate('/home');
    localStorage.removeItem('token');
  };
  localStorage.getItem('token')
    ? (button = (
        <Button
          type={'profile'}
          onClick={() => navigate('/profile')}
          width={'120px'}
        >
          <FaUser />
          Profile
        </Button>
      ))
    : (button = (
        <Button onClick={() => navigate('/signin')} width={'120px'}>
          Login
        </Button>
      ));
  localStorage.getItem('token')
    ? (icon = <Log onClick={() => navigate('/profile')} />)
    : (icon = icon = <Log onClick={() => navigate('/signin')} />);
  location.pathname === '/profile' && (icon = <Door onClick={logout} />);

  location.pathname === '/profile' &&
    (button = (
      <Button onClick={logout} type={'logout'} width={'120px'}>
        Log out
      </Button>
    ));

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Nav />
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
          <div className='Button'>{button}</div>
          {icon}
        </NavbarWrapper>
      </Container>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Navbar;
