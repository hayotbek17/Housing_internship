import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/ArrowIcon.svg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 48px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  max-width: 1440px;
  @media (max-width: 760px) {
    display: none;
  }
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
  @media (max-width: 1000px) {
    width: 800px;
    padding: 0px;
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
const Mobile = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 21px 16px;
    align-items: center;
    width: 100%;
  }
`;
export { Container, Wrapper, Carousel, Icon, Mobile };
