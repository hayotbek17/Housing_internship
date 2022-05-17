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
export const Filter = () => {
  const advansedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input pl={'15'} mr={'20'} placeholder={'Country'} />
        <Input pl={'15'} mr={'20'} placeholder={'Region'} />
        <Input pl={'15'} mr={'20'} placeholder={'City'} />
        <Input pl={'15'} mr={'20'} placeholder={'Zip Code  '} />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input pl={'15'} mr={'20'} placeholder={'Rooms'} />
        <Input pl={'15'} mr={'20'} placeholder={'Size'} />
        <Input pl={'15'} mr={'20'} placeholder={'Sort'} />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input pl={'15'} mr={'20'} placeholder={'Min Price'} />
        <Input pl={'15'} mr={'20'} placeholder={'Max Price'} />{' '}
      </Section>
      <BottomSection>
        <Button mr={'20'} width={'128px'} type={'primary'}>
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
