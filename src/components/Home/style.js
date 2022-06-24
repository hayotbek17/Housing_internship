import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 760px) {
    .phone {
      display: none;
    }
  }
  display: flex;
  flex-direction: column;
`;
export { Container };
