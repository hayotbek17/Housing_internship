import styled from 'styled-components';
import img2 from '../../../assets/img/img2.png';
const Container = styled.div`
  /* max-width: 1440px; */
  width: 100%;
  height: 571px;
  background: url(${img2});
  background-size: cover;

  position: relative;
  margin-bottom: 96px;
`;
const Wrapper = styled.div`
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  /* right: 50%; */
  left: 50%;
  /* opacity: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export { Container, Wrapper, Title };
