import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
const Container = styled.div`
  background: #0d263b;
  /* height: 417px; */
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 48px 130px 0px 130px;
  width: 100%;
  height: 384px;
  max-width: 1440px;
`;
Wrapper.In = styled.div`
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 130px;
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  height: 68px;
  justify-content: space-between;
  width: 100%;
`;
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-bottom: 32px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Subtitle = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding-bottom: 20px;
`;
Logo.Icon = styled(LogoIcon)``;
Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
  color: #ffff;
`;
export { Container, Wrapper, Bottom, Logo, Subtitle, Title };
