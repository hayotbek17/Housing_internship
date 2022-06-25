import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 96px;
  width: 100%;
`;
const Container = styled(Carousel)`
  position: relative;
  width: 100%;
  height: 570px;
  @media (max-width: 760px) {
    height: 712px;
  }
`;
const Img = styled.img`
  background-color: black;
  width: 100%;
  height: fit-content;
  height: 570px;
  @media (max-width: 760px) {
    object-fit: cover;
    height: 712px;
  }
`;

const Icon = styled.div`
  @media (max-width: 760px) {
    display: none;
  }
`;

Icon.Left = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 43%;
  left: 20px;
  color: white;

  background-color: white;
  padding: 12px;
  opacity: 0.7;
  border-radius: 50%;
  z-index: 999;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
  cursor: pointer;
  @media (max-width: 760px) {
    display: none;
  }
`;
Icon.Right = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 43%;
  right: 20px;

  transform: rotate(180deg);
  color: white;
  background-color: white;
  padding: 12px;
  opacity: 0.7;
  border-radius: 50%;
  z-index: 999;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
  cursor: pointer;
  @media (max-width: 760px) {
    display: none;
  }
`;
const Opacity = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: black;
`;
const Titles = styled.div`
  position: absolute;
  z-index: 999;
  color: white;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  .mobile {
    display: none;
  }
  @media (max-width: 760px) {
    font-size: 28px;
    line-height: 36px;
    .mobile {
      display: flex;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Titles.In = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 30px 0px;

  /* identical to box height, or 150% */
  @media (max-width: 760px) {
    font-size: 14px;
  }

  color: #ffffff;
`;
export { Container, Img, Icon, Wrapper, Opacity, Titles };
