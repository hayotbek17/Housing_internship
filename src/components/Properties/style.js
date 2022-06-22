import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0px 130px;
`;
Wrapper.Title = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin: 60px 0px 70px 0px;
`;
const Result = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: 1440px;
`;
const Animation = keyframes`
100%{
  transform: rotate(360deg);
}
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
  margin: 60px 0px 70px 0px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
Loading.In = styled.div`
  background-color: var(--primaryColor);
  height: 50px;
  width: 50px;
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid white;
  border-radius: 50%;
  animation: ${Animation} 0.7s linear infinite;
`;

export { Container, Title, Wrapper, Result, Loading };
