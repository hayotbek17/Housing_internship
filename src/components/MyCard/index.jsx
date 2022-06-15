import React from 'react';
import {
  Container,
  Details,
  Icon,
  Img,
  Listing,
  Sale,
  Title,
  Title1,
} from './style';

const MyCard = ({ info, onClick }) => {
  return (
    <Container>
      <Listing>
        <Img src={info.attachments[0]?.imgPath} />
        <Title>
          <div>
            <div className='subtitle'>{info?.description}</div>
            <div className='desription'>{info?.name}</div>
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
        <Title1 className='description  '>
          <Icon>
            <Icon.Edit />
            <Icon.Trash onClick={onClick} />
          </Icon>
        </Title1>
      </Details>
    </Container>
  );
};

export default MyCard;
