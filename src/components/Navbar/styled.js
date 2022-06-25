import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as NavIcon } from '../../assets/icons/nav.svg';
import { ReactComponent as Login } from '../../assets/icons/login.svg';
import { TbDoorExit } from 'react-icons/tb';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  padding: 0px 130px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
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
  @media (max-width: 760px) {
    justify-content: space-between;
    .Button {
      display: none;
    }
  }
`;
const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 760px) {
    display: none;
  }
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
const Nav = styled(NavIcon)`
  display: none;
  cursor: pointer;
  :active {
    & path {
      fill: #00fff5;
      color: #00fff5;
    }
  }
  @media (max-width: 760px) {
    display: flex;
  }
`;
const Log = styled(Login)`
  display: none;
  cursor: pointer;
  :active {
    & path {
      fill: #00fff5;
      color: #00fff5;
      background: #00fff5;
    }
  }
  @media (max-width: 760px) {
    display: flex;
  }
`;
Logo.Icon = styled(LogoIcon)``;
Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;
const Door = styled(TbDoorExit)`
  width: 20px;
  height: 20px;
  color: red;
  cursor: pointer;
  display: none;
  @media (max-width: 760px) {
    display: flex;
  }
`;
export {
  Wrapper,
  Container,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
  Nav,
  Log,
  Door,
};
