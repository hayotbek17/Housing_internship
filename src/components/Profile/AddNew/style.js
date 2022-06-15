import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px 130px;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 24px 30px 48px 30px;
  background: #ffffff;
  margin-top: 32px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
export { Container, Section, Wrapper };
