import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';
import { ReactComponent as Apartment } from '../../../assets/icons/apartment.svg';
import Img from '../../../assets/img/categoryhouse.png';
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
  /* display: flex; */
  padding: 0px 130px;
  max-width: 1440px;
  .alice-carousel__prev-btn {
    display: none;
  }
  .alice-carousel__next-btn {
    display: none;
  }
  .alice-carousel__stage-item {
    margin-right: 20px;
  }
  @media (max-width: 1000px) {
    width: 800px;
    padding: 0px;
  }
  @media (max-width: 760px) {
    max-width: 375px;
    width: 100%;
    padding: 0px 16px;
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
  @media (max-width: 760px) {
    top: 85%;
  }
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
  @media (max-width: 760px) {
    top: 85%;
  }
`;
Icon.Apartment = styled(Apartment)``;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 350px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65)),
    url(${Img});
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  cursor: pointer;
  margin-right: 20px;
  gap: 20px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }

  @media (max-width: 760px) {
    width: 161px;
    height: 201px;
  }
`;
Card.Title = styled.div`
  left: 481px;
  top: 2271px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;
export { Container, Wrapper, Carousel, Icon, Card };
