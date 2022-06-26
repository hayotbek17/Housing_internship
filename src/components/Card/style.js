import styled from 'styled-components';
import { ReactComponent as Bed } from '../../assets/icons/bed.svg';
import { ReactComponent as Car } from '../../assets/icons/car.svg';
import { ReactComponent as Ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as Bath } from '../../assets/icons/bath.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as Resize } from '../../assets/icons/resize.svg';
const Container = styled.div`
  background: #ffffff;
  max-width: 400px;
  min-width: 280px;
  @media (max-width: 760px) {
    width: 100%;
  }
  flex-grow: 10;
  height: 429px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;
const Img = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
`;

const Infowrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 16px 20px;
  border-bottom: 1px solid #e6e9ec;
  border-top: 1px solid #e6e9ec;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  padding-top: 18px;
  justify-content: space-between;
`;

Info.Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 49px;
  justify-content: space-between;
`;

const Icons = styled.div``;
Icons.Bath = styled(Bath)``;
Icons.Bed = styled(Bed)`
  padding-top: 4px;
`;
Icons.Ruler = styled(Ruler)``;

Icons.Car = styled(Car)`
  padding-top: 3px;
`;
Icons.Heart = styled(Heart)``;
Icons.Resize = styled(Resize)`
  height: 15px;
  width: 15px;
  margin-right: 20px;
`;

const User = styled.div``;
User.Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  top: -20px;
  right: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;
const Footer = styled.div`
  display: flex;
  padding: 8px 20px;
  justify-content: space-between;
`;
const CardTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
`;
export { Container, Img, Infowrapper, Info, Icons, Footer, User, CardTitle };
