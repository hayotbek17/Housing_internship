import styled from 'styled-components';
import { ReactComponent as maps } from '../../../assets/icons/maps.svg';
import { ReactComponent as discord } from '../../../assets/icons/discord.svg';
import { ReactComponent as calculator } from '../../../assets/icons/calculator.svg';
import { ReactComponent as house } from '../../../assets/icons/house 1.svg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fc;
  height: 434px;
  width: 100%;
  align-items: center;
  padding: 0px 130px;
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

const Tekst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px 40px 0px;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: space-around;

  height: 230px;
  @media (max-width: 760px) {
    padding: 0px;
    flex-direction: column;
    height: 100%;
  }
`;
Wrapper.Card = styled.div`
  text-align: center;
  max-width: 250px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    margin-bottom: 30px;
  }
  @media (max-width: 1000px) {
    height: 300px;
    /* height: 100%; */
  }
`;
const Subtitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;

  /* Color / 2 */

  color: #0d263b;
`;
const Description = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Text / Color */
  padding: 0px 5px;

  color: #696969;
`;
const Icon = styled.div``;
Icon.Discord = styled(discord)``;
Icon.House = styled(house)``;
Icon.Maps = styled(maps)``;
Icon.Camlculator = styled(calculator)``;
export { Container, Tekst, Wrapper, Icon, Subtitle, Description };
