import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px 130px;
  @media (max-width: 1000px) {
    padding: 34px 30px;
  }
  @media (max-width: 760px) {
    padding: 34px 16px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 24px 30px 48px 30px;
  background: #ffffff;
  margin-top: 32px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  .center {
    display: flex;
    justify-content: flex-start;
  }
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0px;
    }
  }

  .width {
    max-width: 260px;
    width: 100%;
    margin-top: 40px;
  }
`;

export { Container, Section, Wrapper };
