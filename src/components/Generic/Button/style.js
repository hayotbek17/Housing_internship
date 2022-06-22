import styled from 'styled-components';

const getType = (type) => {
  switch (type) {
    case 'primary':
      return {
        border: '1px solid #E6E9EC',
        color: '#0D263B',
      };
    case 'secondary':
      return {
        border: '1px solid #0061DF',
        background: '#0061DF',
        color: '#FFFFFF',
      };
    case 'profile':
      return {
        border: '1px solid #0D263B',
        background: 'white',
        color: '#0D263B',
        gap: '5px',
      };
    case 'logout':
      return {
        border: '1px solid #0D263B',
        background: '#bf1111',
        color: 'white',
      };
    default:
      return {
        border: '1px solid white',
        color: '#FFFFFF',
      };
  }
};

const Container = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '44px'};
  min-width: ${({ width }) => width || '100%'};
  width: ${({ width }) => width || '100%'};
  border-radius: 2px;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;
export { Container };
