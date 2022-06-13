import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 131px;
  margin-bottom: 16px;
`;
const Listing = styled.div`
  display: flex;
  width: 100%;
  max-width: 532px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  max-width: 131px;
  max-height: 131px;
  background: #c4c4c4;
  border-radius: 3px;
`;

const Title = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 226px;
`;

const Sale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  height: 23px;
  width: 66px;
  color: white;
  background: #0d263b;
  border-radius: 3px;
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Title1 = styled.div`
  flex: 1;
  text-align: center;
`;
export { Container, Img, Title, Sale, Listing, Details, Title1 };
