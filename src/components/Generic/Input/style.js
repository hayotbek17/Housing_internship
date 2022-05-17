import styled from 'styled-components';

const Container = styled.input`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: ${({ pl }) => `${pl}px` || `15px`};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '44px'};
  width: ${({ width }) => width || '100%'};
  border-radius: 2px;
  border: 1px solid #e6e9ec;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
`;
export { Wrapper, Container, Icon };
