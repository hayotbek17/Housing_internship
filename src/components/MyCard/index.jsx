import React from 'react';
import { Container, Details, Img, Listing, Sale, Title, Title1 } from './style';

const MyCard = ({ info }) => {
  return (
    <Container>
      <Listing>
        <Img src={info.attachments[0]?.imgPath} />
        <Title>
          <div>
            <div className='subtitle'>New Apartment Nice Wiew</div>
            <div className='desription'>Quincy St, Brooklyn, NY, USA</div>
          </div>
          <div>
            <div className='deleted'>${info?.salePrice}/mo</div>
            <div className='subtitle'>${info?.price}/mo</div>
          </div>
        </Title>
        <Sale>FOR SALE</Sale>
      </Listing>
      <Details>
        <Title1 className='description  '>30 December 2022</Title1>
        <Title1 className='description  '>Pending</Title1>
        <Title1 className='description  '>5933</Title1>
        <Title1 className='description  '>5933</Title1>
      </Details>
    </Container>
  );
};

export default MyCard;
