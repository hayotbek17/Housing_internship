import React, { useState } from 'react';
import {
  Icon,
  Container,
  Wrapper,
  Advanced,
  Section,
  BottomSection,
  Mobile,
  MobButtons,
} from './style';
import { Input, Button } from '../Generic/';
import { Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/useReplace';
import { useQuery } from 'react-query';
const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const navigate = useNavigate();
  const query = useSearch();
  const [list, setList] = useState([]);
  useQuery(
    '',
    () => {
      return fetch(`${url}/v1/categories/list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setList(res?.data || []);
      },
    },
  );

  const [state, setState] = useState({
    counrty: query.get('country'),
    region: query.get('region'),
    city: query.get('city'),
    zip_code: query.get('zip_code'),
    adress: query.get('adress'),
    houses_name: query.get('houses_name'),
    rooms: query.get('rooms'),
    min_price: query.get('min_price'),
    max_price: query.get('max_price'),
  });

  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(name, value)}`);
    setState({ ...state, [name]: [value] });
  };
  const onSelect = ({ target }) => {
    navigate(`${UseReplace('category_id', target?.value)}`);
  };
  const onClear = () => {
    setState({
      counrty: '',
      region: '',
      city: '',
      zip_code: '',
      adress: '',
      houses_name: '',
      rooms: '',
      min_price: '',
      max_price: '',
    });
    navigate('/properties');
  };

  const advansedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input
          placeholder={'Country'}
          onChange={onChange}
          name={'country'}
          value={state.counrty}
        />
        <Input
          placeholder={'Region'}
          onChange={onChange}
          name={'region'}
          value={state.region}
        />
        <Input
          onChange={onChange}
          name={'city'}
          value={state.city}
          placeholder={'City'}
        />
        <Input
          placeholder={'Zip Code  '}
          onChange={onChange}
          name={'zip_code'}
          value={state.zip_code}
        />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input
          placeholder={'Adress'}
          onChange={onChange}
          name={'adress'}
          value={state.adress}
        />
        <Input
          placeholder={'Houses Name'}
          onChange={onChange}
          name={'houses_name'}
          value={state.houses_name}
        />
        <Input
          placeholder={'Rooms'}
          onChange={onChange}
          name={'rooms'}
          value={state.rooms}
        />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          placeholder={'Min Price'}
          onChange={onChange}
          name={'min_price'}
          value={state.min_price}
        />
        <Input
          placeholder={'Max Price'}
          onChange={onChange}
          name={'max_price'}
          value={state.max_price}
        />
        <select defaultValue={query.get('category_id')} onChange={onSelect}>
          {list.map((value) => {
            return (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </Section>
      <BottomSection>
        <Button width={'128px'} type={'primary'}>
          Cancel
        </Button>
        <Button width={'128px'} type={'secondary'} onClick={onClear}>
          Reset
        </Button>
      </BottomSection>
    </Advanced>
  );
  return (
    <Container>
      <Wrapper>
        <Input
          pl={'42'}
          placeholder={'Enter an address, neighborhood, city, or ZIP code'}
        >
          <Icon.Home />
        </Input>

        <Popover
          placement='bottomRight'
          content={advansedSearch}
          trigger={'click'}
        >
          <Button ml={'20'} width={'131px'} type={'primary'}>
            <Icon.Settings />
            Advanced
          </Button>
        </Popover>
        <Button
          className={'button'}
          ml={'20'}
          width={'131px'}
          type={'secondary'}
        >
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
      <Mobile>
        <Input
          pl={'42'}
          placeholder={'Enter an address, neighborhood, city, or ZIP code'}
        >
          <Icon.Home />
        </Input>
        <MobButtons>
          <Button width={'131px'} type={'primary'}>
            <Icon.Settings />
            Advanced
          </Button>
          <Button ml={'20'} width={'131px'} type={'secondary'}>
            Search
          </Button>
        </MobButtons>
      </Mobile>
    </Container>
  );
};

export default Filter;
