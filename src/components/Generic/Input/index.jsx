import React, { forwardRef } from 'react';
import { Container, Icon, Wrapper } from './style';
export const Input = forwardRef(
  (
    {
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
      name,
      value,
    },
    ref,
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
        <Icon>{children}</Icon>
        <Container
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          pl={pl}
          width={width}
          height={height}
          onClick={onClick}
        />
      </Wrapper>
    );
  },
);

export default Input;
