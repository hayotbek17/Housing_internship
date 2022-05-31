import React from 'react';
import { Bottom, Container, Logo, Subtitle, Title, Wrapper } from './style';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.In>
          <Title>Contact Us</Title>

          <Subtitle></Subtitle>
        </Wrapper.In>
        <Wrapper.In>
          <Title>Discover</Title>

          <Subtitle>Chicago</Subtitle>
          <Subtitle>Los Angeles</Subtitle>
          <Subtitle>Miami</Subtitle>
          <Subtitle>New York</Subtitle>
        </Wrapper.In>
        <Wrapper.In>
          <Title>Lists by Category</Title>
          <Subtitle>Apartments</Subtitle>
          <Subtitle>Condos</Subtitle>
          <Subtitle>Houses</Subtitle>
          <Subtitle>Offices</Subtitle>
          <Subtitle>Retail</Subtitle>
          <Subtitle>Villas</Subtitle>
        </Wrapper.In>
        <Wrapper.In>
          <Title>Lists by Category</Title>
          <Subtitle>About Us</Subtitle>
          <Subtitle>Terms & Conditions</Subtitle>
          <Subtitle>Support Center</Subtitle>
          <Subtitle>Contact Us</Subtitle>
        </Wrapper.In>
      </Wrapper>
      <Bottom>
        <Logo onClick={() => navigate('/home')}>
          <Logo.Icon />
          <Logo.Title>Housing</Logo.Title>
        </Logo>
        <Subtitle>
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </Subtitle>
      </Bottom>
    </Container>
  );
};

export default Footer;
