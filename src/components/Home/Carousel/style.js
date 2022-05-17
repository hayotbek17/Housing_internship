import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 96px;
`;
const Container = styled(Carousel)`
  width: 100%;
  height: 570px;
`;
const Img = styled.img`
  background-color: black;
  width: 100%;
  height: 570px;
`;

const Icon = styled.div``;

Icon.Left = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
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
`;
Icon.Right = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
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
`;

export { Container, Img, Icon, Wrapper };
