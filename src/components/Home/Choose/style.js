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
  padding: 0px 130px;
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

  justify-content: space-around;

  height: 230px;
`;
Wrapper.Card = styled.div`
  text-align: center;
  max-width: 235px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  padding: 0px 22px;

  color: #696969;
`;
const Icon = styled.div``;
Icon.Discord = styled(discord)``;
Icon.House = styled(house)``;
Icon.Maps = styled(maps)``;
Icon.Camlculator = styled(calculator)``;
export { Container, Tekst, Wrapper, Icon, Subtitle, Description };
