import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  min-width: 290px;

  height: 476px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  padding: 24px;
  justify-content: space-between;
`;
const TextArea = styled.textarea`
  width: 100%;
  border: 0px solid white;
  border-bottom: 1px solid #0d263b;
`;

const User = styled.div`
  display: flex;
`;

User.Img = styled.img`
  width: 52px;
  height: 52px;
`;
User.Name = styled.div`
  padding-left: 20px;
`;

const Title = styled.div`
  font-size: ${({ size }) => `${size}px`};
`;
export { Container, TextArea, User, Title };
