import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
export { Container, Title, Wrapper, Result };
