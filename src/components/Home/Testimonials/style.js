import styled from 'styled-components';
import ellipse from '../../../assets/img/ellipse.png';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fc;
  height: 482px;
  width: 100%;

  align-items: center;

  position: relative;
  @media (max-width: 1000px) {
    padding: 0px 30px;
    height: 534px;
    /* height: 100%; */
  }
  @media (max-width: 760px) {
    padding: 0px;

    height: 100%;
  }
`;

const Carousel = styled.div`
  padding: 0px 130px;
  max-width: 1440px;

  display: flex;
  .alice-carousel__stage {
    display: flex !important;
    width: 100% !important;
    flex-direction: row;

    gap: 20px;
  }
  .alice-carousel__dots {
    margin: 0px 3px 50px;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  .alice-carousel__prev-btn {
    display: none;
  }
  .alice-carousel__next-btn {
    display: none;
  }
  @media (max-width: 1000px) {
    width: 800px;
    padding: 0px;
  }
  @media (max-width: 760px) {
    width: 380px;
    padding: 0px 16px;
  }
`;
const Tekst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px 32px 0px;
  gap: 8px;
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
  top: 60%;
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
    top: 83%;
    left: 15%;
  }
`;
Icon.Right = styled(Arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 60%;
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
    top: 83%;
    right: 15%;
  }
`;

const Card = styled.div`
  cursor: pointer;
  height: 270px;
  flex-grow: 10;
`;
const CardHead = styled.div`
  width: 380px;
  background: #ffffff;
  padding: 40px 48px 61px 48px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  text-align: center;
  position: relative;
`;
const CardBottom = styled.div`
  position: absolute;
  height: 115px;
  width: 190px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid white;
  border-radius: 50%;
  background-image: url(${ellipse});
`;
export { Container, Img, Tekst, Card, Icon, Carousel, CardBottom, CardHead };
