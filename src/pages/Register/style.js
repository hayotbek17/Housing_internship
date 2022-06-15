import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 580px;
  height: 666px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px 48px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Login = styled.div`
  color: #0061df;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  :hover {
    color: #bf1111;
  }
`;
export { Container, Wrapper, Login };
