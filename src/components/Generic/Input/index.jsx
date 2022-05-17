import React from 'react';
import { Container, Icon, Wrapper } from './style';
export const Input = ({
  children,
  onClick,
  height,
  width,
  mr,
  ml,
  mt,
  mb,
  pl,
  onChange,
  placeholder,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
      <Icon>{children}</Icon>
      <Container
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        width={width}
        height={height}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default Input;
