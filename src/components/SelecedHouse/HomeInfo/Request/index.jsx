import React from 'react';
import { Container, TextArea, User, Title } from './style';
import { Button, Input } from '../../../Generic';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Nouser from '../../../../assets/img/nouser.jpg';
const Request = ({ data }) => {
  return (
    <Container>
      <User>
        <User.Img src={Nouser} />
        <User.Name>
          <Title size={16} className='subtitle'>
            {data?.user?.firstname} {data?.user?.lastname}
          </Title>
          <div className='description'>(123)456-7890</div>
        </User.Name>
      </User>
      <Input placeholder={'Name'} />
      <Input placeholder={'Phone'} />
      <Input placeholder={'Email'} />
      <Title size={14} className='subtitle'>
        Message
      </Title>
      <TextArea name='asdasd' id=''></TextArea>

      <Checkbox>
        <Title className='description'>
          By submitting this form I agree to Terms of Use
        </Title>
      </Checkbox>
      <Button type={'secondary'}>Send request</Button>
    </Container>
  );
};

export default Request;
