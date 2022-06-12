import styled from 'styled-components';
import { ReactComponent as Bed } from '../../../../assets/icons/bed.svg';
import { ReactComponent as Car } from '../../../../assets/icons/car.svg';
import { ReactComponent as Ruler } from '../../../../assets/icons/ruler.svg';
import { ReactComponent as Bath } from '../../../../assets/icons/bath.svg';
import { ReactComponent as Heart } from '../../../../assets/icons/heart.svg';
import { ReactComponent as Resize } from '../../../../assets/icons/resize.svg';
import { ReactComponent as Calendar } from '../../../../assets/icons/calendar.svg';
const Container = styled.div`
  width: 100%;

  /* order: 2px solid yellow; */
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

Head.Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 570px;
  width: 100%;
`;
Head.Right = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-end;
  /* border: 2px solid blue; */
  width: 265px;
  height: 116px;
  .Icon {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }
  .Icon1 {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
const Info = styled.div`
  display: flex;
  padding-top: 18px;
  justify-content: space-between;
  width: 600px;
  /* border: 2px solid green; */
`;

Info.Details = styled.div`
  display: flex;
  align-items: center;

  /* flex-direction: column; */
  /* height: 49px; */
  gap: 8px;
`;

const Icons = styled.div``;
Icons.Bath = styled(Bath)``;
Icons.Bed = styled(Bed)`
  padding-top: 4px;
`;
Icons.Ruler = styled(Ruler)``;
Icons.Calendar = styled(Calendar)``;

Icons.Car = styled(Car)`
  padding-top: 3px;
`;
Icons.Heart = styled(Heart)``;
Icons.Resize = styled(Resize)`
  height: 15px;
  width: 15px;
  margin-right: 20px;
`;
const Body = styled.div`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export { Container, Head, Info, Icons, Body };
