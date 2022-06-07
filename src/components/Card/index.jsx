import React from 'react';
import {
  Container,
  Img,
  Info,
  Infowrapper,
  Icons,
  Footer,
  User,
  CardTitle,
} from './style';
import nouser from '../../assets/img/nouser.jpg';
// import house from '../../assets/img/house.png';
import noimg2 from '../../assets/img/noimg2.jpeg';
export const Card = ({ info, mr, onClick }) => {
  return (
    <Container onClick={onClick} mr={mr}>
      <Img src={info?.attachments[0]?.imgPath || noimg2} />

      <Infowrapper>
        <User>
          <User.Img src={info?.attachments[0]?.imgPath || nouser} />
        </User>

        <CardTitle className='subtitle'>{info?.description}</CardTitle>
        <CardTitle className='description'>
          {info?.name || 'house'},{info?.adaress || 'address'},
          {info?.city || 'city'},{info?.country || 'country'}
        </CardTitle>
        <Info>
          <Info.Details className='description'>
            <Icons.Bed />
            {info?.houseDetails?.beds || 0} Beds
          </Info.Details>
          <Info.Details className='description'>
            <Icons.Bath />
            {info?.houseDetails?.bath || 0} Bath
          </Info.Details>
          <Info.Details className='description'>
            <Icons.Car />
            {info?.houseDetails?.garage || 0} Garage
          </Info.Details>
          <Info.Details className='description'>
            <Icons.Ruler />
            {info?.houseDetails?.area || 0} Sq Ft
          </Info.Details>
        </Info>
      </Infowrapper>
      <Footer>
        <Info.Details>
          <div className='description deleted'>{info?.salePrice} $ </div>
          <div className='subtitle'>{info?.price} $</div>
        </Info.Details>
        <div className='center'>
          <Icons.Resize />
          <Icons.Heart />
        </div>
      </Footer>
    </Container>
  );
};
export default Card;
