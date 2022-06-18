import styled, { keyframes } from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 34px;
  padding: 34px 130px 96px 130px;
  width: 100%;
`;
const Container = styled.div`
  margin-top: 32px;
  padding: 24px 30px 48px 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
`;
const ConIn = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 20px;
  color: #0d263b;
`;
const Listing = styled.div`
  width: 100%;
  max-width: 532px;
`;
const Details = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Title = styled.div`
  flex: 1;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
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

export { Wrapper, Container, ConIn, Listing, Details, Title, Head, Loading };
