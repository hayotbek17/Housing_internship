import { message } from 'antd';
import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
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
const { REACT_APP_BASE_URL: url } = process.env;
const MyCard = ({ info, refetch }) => {
  const navigate = useNavigate();
  const onEdit = (id) => {
    navigate(`/profile/add/${id}`);
  };

  const onDelete = (id) => {
    mutate(id, {
      onSuccess: (res) => {
        if (res?.status) {
          refetch();
          message.success('deleted');
        } else {
          message.error('something is wrong');
        }
      },
    });
  };
  const { mutate } = useMutation((id) => {
    return fetch(`${url}/v1/houses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      },
    });
  });
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
            <Icon.Edit onClick={() => onEdit(info.id)} />
            <Icon.Trash onClick={() => onDelete(info.id)} />
          </Icon>
        </Title1>
      </Details>
    </Container>
  );
};

export default MyCard;
