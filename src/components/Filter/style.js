import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icons/SearchHome.svg';
import { ReactComponent as Search } from '../../assets/icons/SearchSearch.svg';
import { ReactComponent as Settings } from '../../assets/icons/Group.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 130px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;
const Icon = styled.div`
  margin-right: 10px;
  margin-top: 6px;
`;

Icon.Home = styled(Home)``;
Icon.Search = styled(Search)`
  margin-right: 8px;
`;
Icon.Settings = styled(Settings)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: '#fffff';
  border-radius: 5px;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 84px;
  background: #f6f8f9;
  gap: 20px;
`;
export { Wrapper, Container, Icon, Advanced, Section, BottomSection };
