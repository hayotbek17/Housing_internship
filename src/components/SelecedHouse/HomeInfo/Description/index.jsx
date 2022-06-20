import React from 'react';
import { Body, Container, Head, Icons, Info } from './style';

const Description = ({ data }) => {
 
  return (
    <Container>
      <Head>
        <Head.Left>
          <div className='title'>{data?.address}</div>
          <div className='description'>Quincy St, Brooklyn, NY, USA</div>

          <div>
            <Info>
              <Info.Details className='description'>
                <Icons.Bed />
                {data?.houseDetails?.beds || 0} Beds
              </Info.Details>
              <Info.Details className='description'>
                <Icons.Bath />
                {data?.houseDetails?.bath || 0}0 Bath
              </Info.Details>
              <Info.Details className='description'>
                <Icons.Car />
                {data?.houseDetails?.garage || 0} Garage
              </Info.Details>
              <Info.Details className='description'>
                <Icons.Ruler />
                {data?.houseDetails?.area || 0} Sq Ft
              </Info.Details>
              <Info.Details className='description'>
                <Icons.Calendar />
                Year Built: {data?.houseDetails?.area || 0}
              </Info.Details>
            </Info>
          </div>
        </Head.Left>
        <Head.Right>
          <div className='Icon'>
            <div className='description'>Share</div>
            <div className='description'>Save</div>
          </div>
          <div className='Icon1'>
            <div className='deleted'>${data?.price || 0}/mo</div>
            <div className='title'>${data?.salePrice || 0}/mo</div>
          </div>
          <div className='description'>Est. Mortgage</div>
        </Head.Right>
      </Head>

      <Body>
        <div className='subtitle'>Description</div>
        <p className='description'>{data.description}</p>

        <a href='aaaaa'>Show more</a>
      </Body>
    </Container>
  );
};

export default Description;
