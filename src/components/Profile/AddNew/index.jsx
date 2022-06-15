import React, { useState } from 'react';
import { Button, Input } from '../../Generic';
import { useMutation } from 'react-query';
import { Container, Section, Wrapper } from './style';

const { REACT_APP_BASE_URL: url } = process.env;
const AddNew = () => {
  const [Contact, setContact] = useState({});
  const [Img, setImg] = useState('');
  const onChange = ({ target }) => {
    const { value, name } = target;

    setContact({ ...Contact, [name]: value });
    console.log({ Img });
  };
  const { mutate } = useMutation((props) => {
    return fetch(`${url}/v1/houses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        address: 'string',
        attachments: [
          {
            imgPath: Img,
          },
        ],
        categoryId: 0,
        city: 'string',
        componentsDto: {
          additional: 'string',
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },

        ...Contact,
        favorite: true,
        homeAmenitiesDto: {
          additional: 'string',
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 7,
          bath: 7,
          beds: 7,
          garage: 7,
          room: 7,
          yearBuilt: 7,
        },
        locations: {
          latitude: 0,
          longitude: 0,
        },

        price: 0,
        region: 'string',
        salePrice: 0,
        status: true,
        zipCode: 'string',
      }),
    }).then((res) => res.json());
  });
  return (
    <Container>
      <div className='title'>Add new property</div>
      <Wrapper>
        <div className='subtitle'>Contact information</div>
        <Section>
          <Input
            name={'name'}
            onChange={onChange}
            mt={40}
            placeholder={'Property title*'}
          />
          <Input
            name={'country'}
            onChange={onChange}
            mt={40}
            placeholder={'Country'}
          />
        </Section>
        <Input
          name={'description'}
          onChange={onChange}
          mt={40}
          placeholder={'Property Description*'}
        />
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Additional</div>
        <Section>
          <Input mt={40} placeholder={'Material'} />
          <Input mt={40} placeholder={'Rooms'} />
        </Section>
        <Section>
          <Input mt={40} placeholder={'Beds'} />
          <Input mt={40} placeholder={'Baths'} />
        </Section>
        <Section>
          <Input mt={40} placeholder={'Garages'} />
          <Input mt={40} placeholder={'Year bulid'} />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Price</div>
        <Section>
          <Input placeholder={'Price'} />
          <Input placeholder={'Sale price'} />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Photos</div>
        <Section>
          <Input
            placeholder={'link'}
            onChange={(e) => setImg(e.target.value)}
          />
        </Section>
      </Wrapper>
      <Button
        onClick={() =>
          mutate('', {
            onSuccess: (res) => {
              console.log(res);
            },
          })
        }
        type={'secondary'}
      >
        Submit
      </Button>
    </Container>
  );
};

export default AddNew;
