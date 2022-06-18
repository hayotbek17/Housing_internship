import React, { useState } from 'react';
import { Button, Input } from '../../Generic';
import { useMutation } from 'react-query';
import { Container, Section, Wrapper } from './style';
import { Checkbox } from 'antd';
import Karta from '../../YMap';

const { REACT_APP_BASE_URL: url } = process.env;
const AddNew = () => {
  const [Contact, setContact] = useState({
    country: '',
    description: '',
    name: '',
    price: '',
    salePrice: '',
  });
  const [homeAmenitiesDto, setHomeAmenitiesDto] = useState({
    additional: 'string',
    busStop: false,
    garden: false,
    market: false,
    park: false,
    parking: false,
    school: true,
    stadium: false,
    subway: false,
    superMarket: false,
  });
  const [houseDetails, sethouseDetails] = useState({
    area: '',
    bath: '',
    beds: '',
    garage: '',
    room: '',
    yearBuilt: '',
  });
  const [Img, setImg] = useState('');
  const onChange = ({ target }) => {
    const { value, name } = target;
    setContact({ ...Contact, [name]: value });
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
        homeAmenitiesDto,
        houseDetails,
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
  console.log(homeAmenitiesDto, 'chek');

  return (
    <Container>
      <div className='title'>Add new property</div>
      <Wrapper>
        <div className='subtitle'>Contact information</div>
        <Section>
          <Input
            value={Contact?.name}
            name={'name'}
            onChange={onChange}
            mt={40}
            placeholder={'Property title*'}
          />
          <Input
            value={Contact?.country}
            name={'country'}
            onChange={onChange}
            mt={40}
            placeholder={'Country'}
          />
        </Section>
        <Input
          value={Contact?.description}
          name={'description'}
          onChange={onChange}
          mt={40}
          placeholder={'Property Description*'}
        />
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Additional</div>
        <Section>
          <Input
            value={houseDetails?.area}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            placeholder={'Area'}
            name={'area'}
          />
          <Input
            value={houseDetails?.room}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            name={'room'}
            placeholder={'Rooms'}
          />
        </Section>
        <Section>
          <Input
            value={houseDetails?.beds}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            name={'beds'}
            placeholder={'Beds'}
          />
          <Input
            value={houseDetails?.bath}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            name={'bath'}
            placeholder={'Baths'}
          />
        </Section>
        <Section>
          <Input
            value={houseDetails?.garage}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            name={'garage'}
            placeholder={'Garages'}
          />
          <Input
            value={houseDetails?.yearBuilt}
            type={'number'}
            mt={40}
            onChange={({ target }) =>
              sethouseDetails({ ...houseDetails, [target.name]: target.value })
            }
            name={'yearBuilt'}
            placeholder={'Year bulid'}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Price</div>
        <Section>
          <Input
            value={Contact?.price}
            type={'number'}
            onChange={onChange}
            name={'price'}
            placeholder={'Price'}
          />
          <Input
            value={Contact?.salePrice}
            type={'number'}
            onChange={onChange}
            name={'salePrice'}
            placeholder={'Sale price'}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Photos</div>
        <Section>
          <Input
            value={Img}
            placeholder={'link'}
            onChange={(e) => setImg(e.target.value)}
          />
        </Section>
      </Wrapper>
      <Wrapper>
        <div className='subtitle'>Amenities</div>
        <Section className='center'>
          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'school'}
            className='width'
          >
            <div className='description'>School</div>
          </Checkbox>
          <Checkbox
            className='width'
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'park'}
          >
            <div className='description'>Park</div>
          </Checkbox>

          <Checkbox
            className='width'
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'superMarket'}
          >
            <div className='description'>Super market</div>
          </Checkbox>
        </Section>
        <Section className='center'>
          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'market'}
            className='width'
          >
            <div className='description'>Market</div>
          </Checkbox>
          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'stadium'}
            className='width'
          >
            <div className='description'>Stadium</div>
          </Checkbox>

          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'garden'}
            className='width'
          >
            <div className='description'>Garden</div>
          </Checkbox>
        </Section>
        <Section className='center'>
          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'busStop'}
            className='width'
          >
            <div className='description'>Bus stop</div>
          </Checkbox>
          <Checkbox
            className='width'
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'parking'}
          >
            <div className='description'>Parking</div>
          </Checkbox>
          <Checkbox
            onChange={({ target }) => {
              setHomeAmenitiesDto({
                ...homeAmenitiesDto,
                [target.name]: target.checked,
              });
            }}
            name={'subway'}
            className='width'
          >
            <div className='description'>Subway</div>
          </Checkbox>
        </Section>
      </Wrapper>

      <Wrapper>
        <Karta />
      </Wrapper>
      <Button
        onClick={() =>
          mutate('', {
            onSuccess: (res) => {
              setContact({
                country: '',
                description: '',
                name: '',
                price: '',
                salePrice: '',
              });
              setImg('');
              sethouseDetails({
                area: '',
                bath: '',
                beds: '',
                garage: '',
                room: '',
                yearBuilt: '',
              });
              console.log(res, 'res');
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
