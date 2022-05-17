import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const NavbarWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  height: 64px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  align-items: center;
`;
const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .active {
    color: #00fff5;
  }
`;

const Link = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  margin: 0px 32px;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(LogoIcon)``;
Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;

export { Wrapper, Container,  NavbarWrapper, NavbarBody, Link, Logo };
