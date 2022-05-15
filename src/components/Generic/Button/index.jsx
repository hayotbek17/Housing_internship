import { React, memo } from 'react';
import { Container } from './style';
export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mt,
  mb,
}) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
