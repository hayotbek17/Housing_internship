import React from 'react';
import {
  Container,
  Description,
  Icon,
  Subtitle,
  Tekst,
  Wrapper,
} from './style';

const Testimonials = () => {
  return (
    <Container>
      <Tekst>
        <div className='title'>Testimonials</div>
        <div className='description'>Nulla quis curabitur velit.</div>
      </Tekst>
      <Wrapper>
        <Wrapper.Card>
          <Icon.Discord />
          <Subtitle>
            Trusted <br /> By Thousands
          </Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
        <Wrapper.Card>
          <Icon.House />
          <Subtitle>
            Wide Renge
            <br /> Of Properties
          </Subtitle>
          <Description>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Description>
        </Wrapper.Card>
        <Wrapper.Card>
          <Icon.Camlculator />
          <Subtitle>
            Financing <br />
            Made Easy
          </Subtitle>
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

export default Testimonials;
