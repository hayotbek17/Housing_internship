import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  max-width: 1440px;
  padding: 0px 130px;
`;
const Title = styled.div`
  margin: 60px 0px 70px 0px;
`;
const Result = styled.div`
  gap: 20px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  /* width: 100%; */
`;
export { Container, Title, Wrapper, Result };
