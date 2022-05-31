import React from 'react';
import {
  Icon,
  Container,
  Wrapper,
  Advanced,
  Section,
  BottomSection,
} from './style';
import { Input, Button } from '../Generic/';
import { Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/useReplace';

export const Filter = () => {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const query = useSearch();

  // console.log(UseReplace(), 'Usereplace');

  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(name, value)}`);
  };

  const advansedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input
          placeholder={'Country'}
          onChange={onChange}
          name={'country'}
          defaultValue={query.get('country')}
        />
        <Input
          placeholder={'Region'}
          onChange={onChange}
          name={'region'}
          defaultValue={query.get('region')}
        />
        <Input
          onChange={onChange}
          name={'city'}
          defaultValue={query.get('city')}
          placeholder={'City'}
        />
        <Input
          placeholder={'Zip Code  '}
          onChange={onChange}
          name={'zip_code'}
          defaultValue={query.get('zip_code')}
        />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input
          placeholder={'Adress'}
          onChange={onChange}
          name={'adress'}
          defaultValue={query.get('adress')}
        />
        <Input
          placeholder={'Houses Name'}
          onChange={onChange}
          name={'houses_name'}
          defaultValue={query.get('houses_name')}
        />
        <Input
          placeholder={'Rooms'}
          onChange={onChange}
          name={'rooms'}
          defaultValue={query.get('rooms')}
        />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          placeholder={'Min Price'}
          onChange={onChange}
          name={'min_price'}
          defaultValue={query.get('min_price')}
        />
        <Input placeholder={'Max Price'} />{' '}
      </Section>
      <BottomSection>
        <Button width={'128px'} type={'primary'}>
          Cancel
        </Button>
        <Button width={'128px'} type={'secondary'}>
          Submit
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
        <Button ml={'20'} width={'131px'} type={'secondary'}>
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
