import React from 'react';
import {
  Container,
  Description,
  Icon,
  Subtitle,
  Tekst,
  Wrapper,
} from './style';

const Choose = () => {
  return (
    <Container>
      <Tekst>
        <div className='title'>Why Choose Us?</div>
        <div className='description'>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Tekst>
      <Wrapper>
        <Wrapper.Card>
          <Icon.Discord />
          <Subtitle>Trusted By Thousands</Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
        <Wrapper.Card>
          <Icon.House />
          <Subtitle>Wide Renge Of Properties</Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
        <Wrapper.Card>
          <Icon.Camlculator />
          <Subtitle>Financing Made Easy</Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
        <Wrapper.Card>
          <Icon.Discord />
          <Subtitle>See Neighborhoods</Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
      </Wrapper>
    </Container>
  );
};

export default Choose;
