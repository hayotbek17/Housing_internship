import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin: 96px 0px 48px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`;
const Carousel = styled.div`
  display: flex;
  padding: 0px 130px;
  max-width: 1440px;
  .alice-carousel__prev-btn {
    display: none;
  }
  .alice-carousel__next-btn {
    display: none;
  }
`;

const Icon = styled.div``;

Icon.Left = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 43%;
  left: 25px;
  color: white;

  background-color: black;
  padding: 12px;
  opacity: 0.7;
  border-radius: 50%;
  z-index: 999;
  & path {
    fill: white;
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
  width: 40px;
  height: 40px;
  top: 43%;
  right: 25px;

  transform: rotate(180deg);
  color: white;
  background-color: black;
  padding: 12px;
  opacity: 0.7;
  border-radius: 50%;
  z-index: 999;
  & path {
    fill: white;
  }
  :hover {
    opacity: 0.97;
  }
  cursor: pointer;
`;
export { Container, Wrapper, Carousel, Icon };
